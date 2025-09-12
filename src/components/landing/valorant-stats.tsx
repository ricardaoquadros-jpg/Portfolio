"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/shared/section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getValorantStats, type GetValorantStatsOutput } from "@/ai/flows/get-valorant-stats";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Gamepad2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const RiotId = {
    name: "RKZ",
    tag: "00001",
};

function ValorantCardSkeleton() {
    return (
        <Card className="max-w-sm mx-auto w-full shadow-lg bg-card/50">
            <CardHeader className="text-center">
                <Skeleton className="h-7 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-1/2 mx-auto" />
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
                <Skeleton className="h-32 w-32 rounded-full" />
                <div className="w-full space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-8 w-full" />
                </div>
            </CardContent>
            <CardFooter className="flex justify-around">
                 <div className="text-center">
                    <Skeleton className="h-6 w-12 mx-auto mb-1" />
                    <Skeleton className="h-4 w-16 mx-auto" />
                 </div>
                 <div className="text-center">
                    <Skeleton className="h-6 w-12 mx-auto mb-1" />
                    <Skeleton className="h-4 w-16 mx-auto" />
                 </div>
            </CardFooter>
        </Card>
    )
}

function ValorantErrorState({ error }: { error: string }) {
    return (
        <Alert variant="destructive" className="max-w-sm mx-auto">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Erro ao Carregar</AlertTitle>
            <AlertDescription>
                Não foi possível buscar as estatísticas do Valorant. A API pode estar indisponível. Detalhe: {error}
            </AlertDescription>
        </Alert>
    );
}

export function ValorantStats() {
    const [stats, setStats] = useState<GetValorantStatsOutput | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchStats() {
            try {
                setLoading(true);
                setError(null);
                const result = await getValorantStats(RiotId);
                setStats(result);
            } catch (e: any) {
                console.error(e);
                setError(e.message || "An unexpected error occurred.");
            } finally {
                setLoading(false);
            }
        }
        fetchStats();
    }, []);

    return (
        <Section id="valorant-stats" className="bg-card">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <Gamepad2 className="h-10 w-10 text-primary" />
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                    Minhas Estatísticas no Valorant
                </h2>
                <p className="max-w-[700px] text-foreground/80 md:text-xl">
                    Acompanhe meu desempenho em tempo real no meu jogo favorito.
                </p>
            </div>
            
            <div className="flex justify-center">
                {loading && <ValorantCardSkeleton />}
                {error && <ValorantErrorState error={error}/>}
                {!loading && !error && stats && (
                     <Card className="max-w-sm w-full shadow-lg hover:shadow-primary/20 transition-shadow duration-300 animate-fade-in-up">
                        <CardHeader className="text-center">
                            <CardTitle className="font-headline text-2xl">{stats.name} <span className="text-foreground/50">#{stats.tag}</span></CardTitle>
                            <CardDescription>{stats.rank}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center space-y-4">
                            <Image src={stats.rankImageUrl} alt={`Ícone do rank ${stats.rank}`} width={128} height={128} className="drop-shadow-lg"/>
                            <div>
                                <p className="text-sm text-center text-foreground/80 mb-1">{stats.rankProgress} / 100 RR</p>
                                <Progress value={stats.rankProgress} className="w-48 h-2" />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-around text-center">
                            <div>
                                <p className="font-bold text-2xl text-primary">{stats.wins}</p>
                                <p className="text-sm text-muted-foreground">Vitórias</p>
                            </div>
                            <div>
                                <p className="font-bold text-2xl text-primary">{stats.winRate}%</p>
                                <p className="text-sm text-muted-foreground">Taxa de Vitória</p>
                            </div>
                        </CardFooter>
                    </Card>
                )}
            </div>
        </Section>
    );
}
