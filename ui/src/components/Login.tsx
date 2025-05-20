function Login() {

    return(
        <>
            <h2>LOGIN</h2>
            <form action="#">
                <div className="input-field">
                    <input type="text" required/>
                    <label>Email</label>
                </div>
                <div className="input-field">
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <a href="#" className="forgot-pass-link">Forgot password?</a>
                <button type="submit">Log In</button>
            </form>
            <div className="bottom-link">
                Don't have an account?
                <a href="#" id="signup-link">Signup</a>
            </div>
        </>
    )
}

export default Login