import { useEffect, useState } from 'react'

type DataKey = 'about-me' | 'projects' | 'soft-skills' | 'social-media'

const cache = new Map<string, any>()

const useData = (key: DataKey) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        if (cache.has(key)) {
            setData(cache.get(key))
            setLoading(false)
            return
        }

        const loadData = async () => {
            try {
                const module = await import(`../data/${key}.json`)
                const data = module.default
                cache.set(key, data)
                setData(data)
            } catch (err) {
                const error = err instanceof Error ? err : new Error('Failed to load data')
                setError(error)
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [key])

    return { data, loading, error }
}

export default useData
