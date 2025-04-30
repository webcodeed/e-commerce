import { useNavigate } from "react-router-dom"
import { useAuth } from "./AuthContext"
import { useState } from "react"
import useLike from "./useLike"

function Login() {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const {likedItems} = useLike()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: userName,
                    password: password,
                    expiresInMins: 30, // optional, defaults to 60
                }),
                credentials: "include", // Include cookies (e.g., accessToken) in the request
            })
            const data = await res.json()

            if (res.ok) {
                login(data.token)
                navigate("/")
            } else {
                alert(`login faild: ${data.message}`)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <div className="login_div">
                <label htmlFor="login_user">Email</label>
                <input
                    type="text"
                    name="userName"
                    id="login_user"
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                    required
                    placeholder="Enter Your Email"
                />
            </div>
            <div className="login_div">
                <label htmlFor="login_password">Password</label>
                <input
                    type="password"
                    name="loginPassword"
                    id="login_password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    required
                    placeholder="Enter your password"
                />
            </div>
            <button type="submit">Log in</button>
            <p>sign up | forgot password</p>
        </form>
    )
}

export default Login
