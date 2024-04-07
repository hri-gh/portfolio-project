import { useState, useEffect } from 'react';
import axios, { CancelTokenSource } from 'axios';

interface CustomQueryResult<T> {
  data: T[] | undefined;
  isLoading: boolean;
  error: any;
  fetchData: (url: string, method: string, requestData?: any) => Promise<void>;
}

export default function useCustomQuery<T>(): CustomQueryResult<T> {
  const [data, setData] = useState<T[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const cancelTokenSource = axios.CancelToken.source();

  const fetchData = async (url: string, method: string, requestData?: any): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      let response;
      switch (method) {
        case 'GET':
          response = await axios.get<T[]>(url, { cancelToken: cancelTokenSource.token });
          break;
        case 'POST':
          response = await axios.post<T[]>(url, requestData, { cancelToken: cancelTokenSource.token });
          break;
        case 'DELETE':
          response = await axios.delete<T[]>(url, { cancelToken: cancelTokenSource.token });
          break;
        case 'PATCH':
          response = await axios.patch<T[]>(url, requestData, { cancelToken: cancelTokenSource.token });
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      setData(response.data);
    } catch (error) {
      if (!axios.isCancel(error)) {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      cancelTokenSource.cancel('Request canceled by cleanup');
    };
  }, []);

  return { data, isLoading, error, fetchData };
}

