import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosError, CanceledError } from "axios";


interface Genre {
    id: number;
    name:string;
}

interface FetchGenresResponse {
    count:number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGames] = useState<Genre[]>();
    const [error, setError] = useState<AxiosError>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const controller = new AbortController();

      setIsLoading(true);

      apiClient
        .get<FetchGenresResponse>("/genres", { signal: controller.signal })
        .then((res) => {
          setGames(res.data.results);
          setIsLoading(false);
        })
        .catch((err: AxiosError) => {
          if (err instanceof CanceledError) return;
          setError(err);
          setIsLoading(false);
        });

      return () => controller.abort();
    }, []);

    return {
      genres,
      error,
      isLoading,
    };
 
}

export default useGenres