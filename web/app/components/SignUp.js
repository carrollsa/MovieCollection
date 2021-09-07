import React from 'react'

function SignUp() {
    return (
        <div>
            <form className="auth">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="auth-input" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="auth-input" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="auth-input" placeholder="Email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="auth-input" placeholder="Password" />
                </div>
                
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="auth-input" placeholder="Confirm" />
                </div>

                <button type="submit" className="btn">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        </div>
    )
}

export default SignUp
