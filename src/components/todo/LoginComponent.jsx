import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function LoginComponent() {

    const [username, setUsername] = useState("Banibrata");

    const [password, setPassword] = useState("");

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();

    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleSunmit() {
        // console.log(username);
        // console.log(password);

        if(await authContext.login(username, password)) {
            navigate(`/welcome/${username}`);
        } else {
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="Login">
            <div className="LoginFrom">
                <h1>Time To Login!</h1>
                {showErrorMessage && <div className="errorMessage">Authentication Failed! Check Your Credentials!</div>}
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSunmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;