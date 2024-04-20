// Custom method
import { useEffect, useState } from 'react';
import axios from 'axios';


const useQuery = (urlPath: any) => {
  const [data, setData] = useState<any>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        setError(false)

        const response = await axios.get(urlPath)
        setData(response.data)

        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })()

  }, [urlPath])

  return [data, error, loading]
}


export default useQuery
