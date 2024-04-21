"use client"

import useQuery from '@/hooks/use-query';

export const useOverview = () => {

  const [data, error, loading] = useQuery('/api/overview')

  return [data, error, loading]
}
