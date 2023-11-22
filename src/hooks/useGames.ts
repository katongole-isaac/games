import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosError, CanceledError } from "axios";


export interface Platform {
  id: number;
  slug: string;
  name:string;
}

export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms: { platform : Platform }[],
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {

  const [games, setGames] = useState<Game[]>();
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {

    const controller = new AbortController();

    setIsLoading(true);

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results)
        setIsLoading(false);
      })
      .catch((err: AxiosError) => {
        if(err instanceof CanceledError) return;
        setError(err);
        setIsLoading(false);

      });

    return () => controller.abort();

  }, []);

  return {
    games,
    error,
    isLoading
  };
};

export default useGames;
