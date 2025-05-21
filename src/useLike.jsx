import { useEffect, useState } from "react"

const LOCAL_STORAGE_KEY = "liked_items"

function useLike() {
    const [likedItems, setLikedItems] = useState(null)

    // Load from localStorage on mount
    useEffect(() => {
        const storedLikes =
            JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
        console.log(storedLikes)
        setLikedItems(storedLikes)
    }, [])

    // save to localStorage when likedItems changes
    useEffect(() => {
        if (likedItems) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(likedItems))
            console.log(likedItems);
        }
    }, [likedItems])

    // Add an item
    const likeItem = (item) => {
        const savedLikes = likedItems.some((liked) => liked.id === item.id)
        if (!savedLikes) {
            setLikedItems([...likedItems, item])
        }
    }

    // Remove an item
    const unlikeItem = (item) => {
        setLikedItems(likedItems.filter((unlike) => unlike.id !== item.id))
    }

    // Check if Liked
    const isLiked = (item) => {
        if (!likedItems) {
            return false
        }
        return likedItems.some((iflike) => iflike.id === item.id)
    }

    return { likedItems, likeItem, unlikeItem, isLiked }
}

export default useLike
