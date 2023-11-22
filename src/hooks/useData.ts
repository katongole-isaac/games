import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";

interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    apiClient
      .get<FetchDataResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, deps ? [...deps]: []);

  return {
    data,
    error,
    isLoading,
  };
};

export default useData;
