import { useEffect, useState } from 'react'

interface UseDataResult<T> {
  data: T | null
  loading: boolean
  error: string | null
}

/** Hook genérico que consome uma função de "API" e controla loading/erro. */
export function useData<T>(fetcher: () => Promise<T>): UseDataResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    setLoading(true)
    setError(null)

    fetcher()
      .then((result) => {
        if (active) setData(result)
      })
      .catch(() => {
        if (active) setError('Não foi possível carregar os dados.')
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [fetcher])

  return { data, loading, error }
}
