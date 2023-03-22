import { useState } from "react"

export default  function Joke({ id, text, favorite, onFavorite }) {

    const [likes, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    const handleLike = () => {
        setLike(likes + 1)
        console.log(`like id: ${id}, totalLikes ${likes}`)
    }

    const handleDislike = () => {
        setDislike(dislike + 1)
        console.log(`dislike id: ${id}, totalLikes ${likes}`)
    }

    const handleFavorite = () => {
        onFavorite(id)
    }

    return (
        <div>
            <p>{text}</p>
            <p>Likes: {likes - dislike}</p>
            <p>Favorite: {favorite ? "YES": "NO"}</p>
            <button onClick={handleLike}>👍</button>
            <button onClick={handleDislike}>👎</button>
            <button onClick={handleFavorite}>Favorite</button>
        </div>
    )
}