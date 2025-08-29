const ErrorMessage = ({message}) => {
    if (!message) return null;
    return (
        <div style={{color: "#b00020", background: "#fde7ea", padding: 8, borderRadius: 6, marginBottom: 12}}>
            {message}
        </div>
    );
};

export default ErrorMessage;
