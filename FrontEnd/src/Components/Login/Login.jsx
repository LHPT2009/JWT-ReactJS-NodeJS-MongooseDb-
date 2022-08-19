import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
    const [username, setUsername] = useState("");//nơi lưu trữ dữ liệu
    const [password, setPassword] = useState("");//nơi lưu trữ dữ liệu

    const handlelogin = (e) => {
        e.preventDefault();
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