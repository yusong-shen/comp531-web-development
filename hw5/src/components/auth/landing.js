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
        <div className="text-center">
            <img src='/img/rice-logo.jpg' width={300} height={100}/>
        </div>
        <div className="row">
            <LoginForm/>
        </div>
        <div className="row">
            <RegisterForm/>
        </div>
    </div>

)

export default Landing