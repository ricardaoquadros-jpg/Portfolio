'use server';

/**
 * @fileOverview A skill prioritization AI agent.
 *
 * - prioritizeSkills - A function that prioritizes skills based on relevance.
 * - PrioritizeSkillsInput - The input type for the prioritizeSkills function.
 * - PrioritizeSkillsOutput - The return type for the prioritizeSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrioritizeSkillsInputSchema = z.object({
  skills: z
    .array(z.string())
    .describe('An array of technical skills to prioritize.'),
});
export type PrioritizeSkillsInput = z.infer<typeof PrioritizeSkillsInputSchema>;

const PrioritizeSkillsOutputSchema = z.object({
  prioritizedSkills: z
    .array(z.string())
    .describe('An array of technical skills, prioritized by relevance.'),
});
export type PrioritizeSkillsOutput = z.infer<typeof PrioritizeSkillsOutputSchema>;

export async function prioritizeSkills(input: PrioritizeSkillsInput): Promise<PrioritizeSkillsOutput> {
  return prioritizeSkillsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'prioritizeSkillsPrompt',
  input: {schema: PrioritizeSkillsInputSchema},
  output: {schema: PrioritizeSkillsOutputSchema},
  prompt: `You are an expert in evaluating technical skills and their relevance in the current tech industry.

  Given the following list of skills, prioritize them based on their relevance and sophistication. Skills that are more modern, in-demand, and complex should be ranked higher.

  Skills:
  {{#each skills}}- {{this}}\n{{/each}}

  Return the skills in a prioritized array. Only include the skills listed in the input. Don't add any additional text or explanation.
  The returned array should have the most important skills first, and the least important skills last.
  `,
});

const prioritizeSkillsFlow = ai.defineFlow(
  {
    name: 'prioritizeSkillsFlow',
    inputSchema: PrioritizeSkillsInputSchema,
    outputSchema: PrioritizeSkillsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
