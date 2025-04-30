import { useEffect, useState } from "react"

function useFetch({url, render}) {
    const [items, setItems] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchData(url) {
            try {
                const result = await fetch(url)
                const data = await result.json()

                setItems(data)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                setError(error.message)
            }
        }
            fetchData(url)
    }, [render])
    return { items, isLoading, error }
}

export default useFetch
