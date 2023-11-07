
import Message from "./message"

const SuccessMessage = ({ message }) => {
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

    return (
        <Message text={message} style={successMessageStyle} />
    )
}

export default SuccessMessage