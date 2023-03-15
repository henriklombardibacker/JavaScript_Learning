export default function Form({ onSubmit }) {

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit()
    }
    
    return (
    <form onSubmit={onSubmit}>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
        <button type="submit">Submit</button>
    </form>
    )
}