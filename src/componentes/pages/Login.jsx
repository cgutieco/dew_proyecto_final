import {useNavigate} from "react-router-dom";
import LoginForm from "../LoginForm";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div style={{padding: 20}}>
            <LoginForm onSuccess={(user) => {
                navigate("/home", {replace: true, state: {userName: user.name}});
            }}/>
        </div>
    );
};

export default Login;
