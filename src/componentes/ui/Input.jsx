const Input = ({label, type = "text", value, onChange, name, placeholder}) => {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: 4, marginBottom: 12}}>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{padding: "8px 10px", borderRadius: 6, border: "1px solid #ccc"}}
            />
        </div>
    );
};

export default Input;
