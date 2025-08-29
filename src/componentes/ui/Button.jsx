const Button = ({children, type = "button", onClick, disabled}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{
                padding: "10px 14px",
                borderRadius: 6,
                border: "none",
                background: "#222",
                color: "#fff",
                cursor: "pointer"
            }}
        >
            {children}
        </button>
    );
};

export default Button;
