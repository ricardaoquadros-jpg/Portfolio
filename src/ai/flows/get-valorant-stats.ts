'use server';

/**
 * @fileOverview Fetches Valorant player statistics.
 *
 * - getValorantStats - A function that fetches Valorant player stats using their Riot ID.
 * - GetValorantStatsInput - The input type for the getValorantStats function.
 * - GetValorantStatsOutput - The return type for the getValorantStats function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GetValorantStatsInputSchema = z.object({
  name: z.string().describe('The player\'s in-game name.'),
  tag: z.string().describe('The player\'s tag (without the #).'),
});
export type GetValorantStatsInput = z.infer<typeof GetValorantStatsInputSchema>;

// Define a schema for the expected API response structure to ensure type safety.
const ValorantApiMmrDataSchema = z.object({
    current_data: z.object({
      currenttierpatched: z.string(),
      ranking_in_tier: z.number(),
      mmr_change_to_last_game: z.number(),
      images: z.object({
        large: z.string().url(),
      }),
    }),
    by_season: z.record(z.object({
        error: z.boolean().optional(),
        wins: z.number().optional(),
        number_of_games: z.number().optional(),
    }).optional()),
});


const ValorantStatsSchema = z.object({
  name: z.string(),
  tag: z.string(),
  rank: z.string(),
  rankImageUrl: z.string().url(),
  rankProgress: z.number(),
  wins: z.number(),
  totalGames: z.number(),
  winRate: z.number(),
});
export type GetValorantStatsOutput = z.infer<typeof ValorantStatsSchema>;

// This is the main flow that will be called from the frontend.
const getValorantStatsFlow = ai.defineFlow(
  {
    name: 'getValorantStatsFlow',
    inputSchema: GetValorantStatsInputSchema,
    outputSchema: ValorantStatsSchema,
  },
  async ({ name, tag }) => {
    try {
      const url = `https://api.henrikdev.xyz/valorant/v2/mmr/br/${name}/${tag}`;
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `${process.env.VALORANT_API_KEY}`
        }
      });
      
      const rawData = await response.json();

      if (!response.ok) {
        console.error(`API Error: ${response.status} ${response.statusText}`, rawData);
        throw new Error(`Failed to fetch Valorant stats. Status: ${response.status}. Message: ${rawData.message || 'Unknown API error'}`);
      }

      // The API response has a nested structure, so we parse it safely.
      const parsedData = ValorantApiMmrDataSchema.parse(rawData.data);

      const currentSeasonId = Object.keys(parsedData.by_season).pop();
      let wins = 0;
      let totalGames = 0;
      let winRate = 0;

      if(currentSeasonId && parsedData.by_season[currentSeasonId] && !parsedData.by_season[currentSeasonId]?.error) {
        const season = parsedData.by_season[currentSeasonId]!;
        wins = season.wins ?? 0;
        totalGames = season.number_of_games ?? 0;
        if(totalGames > 0) {
            winRate = Math.round((wins / totalGames) * 100);
        }
      }

      return {
        name,
        tag,
        rank: parsedData.current_data.currenttierpatched,
        rankImageUrl: parsedData.current_data.images.large,
        rankProgress: parsedData.current_data.ranking_in_tier,
        wins,
        totalGames,
        winRate,
      };

    } catch (error: any) {
      console.error('Error fetching or parsing Valorant stats:', error);
      // Fallback or re-throw error
      throw new Error(error.message || 'Could not retrieve Valorant statistics.');
    }
  }
);


// Export a wrapper function to be used in server components.
export async function getValorantStats(input: GetValorantStatsInput): Promise<GetValorantStatsOutput> {
  return getValorantStatsFlow(input);
}
