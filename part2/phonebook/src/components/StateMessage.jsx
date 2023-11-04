
const StateMessage = ({ message, messageType }) => {
    if (message === null)
        return null
    
    const successMessageStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const errorMessageStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div className="message-state" style={(messageType === 'success') ? successMessageStyle : errorMessageStyle }>
            {message}                    
        </div>
    )
}

export default StateMessage