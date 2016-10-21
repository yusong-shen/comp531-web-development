/**
 * Created by yusong on 10/20/16.
 */
import React from 'react'
import LoginForm from './login'
import RegisterForm from './register'

export const Landing = () => (
    // This is the Profile view.
    <div>
        <div>
            <h3>Landing</h3>
            Logo Picture
        </div>
        <div className="row">
            <div className="col-sm-6">
                <h4>Login</h4>
                <LoginForm/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6">
                <h4>Register</h4>
                <RegisterForm/>
            </div>
        </div>
    </div>

)

export default Landing