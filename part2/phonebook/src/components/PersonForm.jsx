
const PersonForm = ({ name, handleName, number, handleNumber, addPerson }) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={name} onChange={handleName} required/>
            </div>
            <div>
                number: <input value={number} onChange={handleNumber} required/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
} 

export default PersonForm