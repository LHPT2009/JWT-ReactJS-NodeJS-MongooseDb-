import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser, loginuser } from "../../Redux/apiRequest";
import { useDispatch } from "react-redux";
const Login = () => {
    const [username, setUsername] = useState("");//nơi lưu trữ dữ liệu
    const [password, setPassword] = useState("");//nơi lưu trữ dữ liệu
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlelogin = (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
        };
        loginUser(newUser, dispatch, navigate);
    }

    return (
        <section className="login-container">
            <div className="login-title"> Log in</div>
            <form onSubmit={handlelogin}>
                <label>USERNAME</label>
                <input type="text"
                    placeholder="Enter your username"
                    onChange={(e) => setUsername(e.target.value)} /> /*nơi tiếp nhận thông tin*/
                <label>PASSWORD</label>
                <input type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)} /> /*nơi tiếp nhận thông tin*/
                <button type="submit"> Continue </button>
            </form>
            <div className="login-register"> Don't have an account yet? </div>
            <Link className="login-register-link" to="/register">Register one for free </Link>
        </section>
    );
}

export default Login;