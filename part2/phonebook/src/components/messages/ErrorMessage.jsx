
import Message from "./message"

const ErrorMessage = ({ message }) => {
    if (message === null)
        return null

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
        <Message text={message} style={errorMessageStyle} />
    )
}

export default ErrorMessage