export default  function Joke({ id, text }) {

    let likes = 0

    const handleLike = () => {
        likes++
        console.log(`like id: ${id}, totalLikes ${likes}`)
    }

    const handleDislike = () => {
        likes--
        console.log(`dislike id: ${id}, totalLikes ${likes}`)
    }

    return (
        <div>
            <p>{text}</p>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>👍</button>
            <button onClick={handleDislike}>👎</button>
        </div>
    )
}