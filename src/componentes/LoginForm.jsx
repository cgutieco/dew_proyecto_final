import {useState} from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import ErrorMessage from "./ui/ErrorMessage";
import {authService, AuthError} from "../logic/authService";

const LoginForm = ({onSuccess}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const user = authService.login(email.trim(), password);
            onSuccess?.(user);
        } catch (err) {
            const msg = err instanceof AuthError ? err.message : "Ocurrió un error";
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}
              style={{maxWidth: 360, margin: "20px auto", padding: 20, border: "1px solid #eee", borderRadius: 8}}>
            <h2 style={{marginTop: 0, textAlign: "center"}}>Iniciar sesión</h2>
            <ErrorMessage message={error}/>
            <Input name="email" type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                   placeholder="tu@email.com"/>
            <Input name="password" type="password" label="Contraseña" value={password}
                   onChange={(e) => setPassword(e.target.value)} placeholder="••••••"/>
            <div style={{display: "flex", justifyContent: "center", marginTop: 8}}>
                <Button type="submit" disabled={loading}>{loading ? "Validando..." : "Ingresar"}</Button>
            </div>
        </form>
    );
};

export default LoginForm;
