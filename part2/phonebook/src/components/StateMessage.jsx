
const StateMessage = ({ message }) => {
    if (message === '')
        return null
    
    const messageStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div className="message-error" style={messageStyle}>
            {message}                    
        </div>
    )
}

export default StateMessage