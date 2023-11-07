
const Filter = ({ text, search, handleSearch }) => {
    return (
        <div>
            {text} <input value={search} onChange={handleSearch}/>
        </div>
    )
}

export default Filter