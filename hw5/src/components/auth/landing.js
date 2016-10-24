/**
 * Created by yusong on 10/20/16.
 */
import React from 'react'
import LoginForm from './login'
import RegisterForm from './register'

let navItems = []


export const Landing = () => (
    // This is the Profile view.
    <div>
        <div>
            <img src='/img/rice-logo.jpg' width={300} height={100}/>
        </div>
        <div className="row">
            <div className="col-sm-6 form">
                <h4>Login Form</h4>
                <LoginForm/>
            </div>
            <div className="col-sm-6 form">
                <h4>Register Form</h4>
                <RegisterForm/>
            </div>
        </div>

    </div>

)

export default Landing