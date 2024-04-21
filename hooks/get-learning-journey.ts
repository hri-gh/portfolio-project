"use client"

import useQuery from '@/hooks/use-query';

export const useLearningJourney = () => {

  const [data, error, loading] = useQuery('/api/learning-journey')

  return [data, error, loading]
}
