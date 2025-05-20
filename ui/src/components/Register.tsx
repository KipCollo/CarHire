function Register() {

    return(
        <>
            <div id='form-box signup'>
                <form id="form" action="#">
                    <h1>REGISTER</h1>
                    <div className="input-control">
                        <label htmlFor="username">Username</label>
                        <input id="username" name="username" type="text"/>
                        <div className="error"></div>
                    </div>
                    <div className="input-control">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="text"/>
                        <div className="error"></div>
                    </div>
                    <div className="input-control">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password"/>
                        <div className="error"></div>
                    </div>
                    <div className="input-control">
                        <label htmlFor="password2">Confirm Password</label>
                        <input id="password2" name="password2" type="password"/>
                        <div className="error"></div>
                    </div>
                    <button type="submit">Sign Up</button>

                    <div className="bottom-link">
                        Already have an account?
                        <a href="#" id="login-link">Login</a>
                    </div>
                </form>
            </div>
        </>
    )

}

export default Register