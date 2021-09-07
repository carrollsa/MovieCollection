import React from 'react'

function Login() {
    return (
        <div className="auth">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="auth-input" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="auth-input" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="remember-me-input" id="rememberMe" />
                        <label className="custom-control-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
    )
}

export default Login
