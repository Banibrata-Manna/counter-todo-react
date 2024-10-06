import { useState} from "react";
import { useNavigate } from "react-router-dom";

function LoginComponent() {

    const [username, setUsername] = useState("in28minutes");

    const [password, setPassword] = useState("");

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();

    function handleUsernameChange(event) {
        // console.log(event.target.value);
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        // console.log(event.target.value);
        setPassword(event.target.value);
    }

    function handleSunmit() {
        // console.log(username);
        // console.log(password);

        if(username === 'BanibrataManna' && password === 'dummy') {
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`);
        } else {
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="Login">
            <div className="LoginFrom">
                <h1>Time To Login!</h1>
                {showSuccessMessage && <div className="successMessage">Authentication Successful!</div>}
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