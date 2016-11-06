/**
 * Created by yusong on 10/20/16.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import LoginForm from './login'
import RegisterForm from './register'
import ErrorMsg from './../errorMsg'


export const Landing = ({loginErr, registerErr, registerMsg}) => (
    // This is the Landing view.
    <div>
        <div className="text-center">
            <img src='/img/rice-logo.jpg' width={300} height={100}/>
        </div>
        <div className="row">
            <LoginForm/>
            {loginErr? <ErrorMsg strong="Login Failed: " errMsg={loginErr} isSuccess={false}/> : null}
        </div>
        <div className="row">
            <RegisterForm/>
            {registerErr? <ErrorMsg strong="Register Failed: " errMsg={registerErr} isSuccess={false}/> : null}
            {registerMsg? <ErrorMsg strong="Register Succeed: " errMsg={registerMsg} isSuccess={true}/> : null}

        </div>
    </div>

)

Landing.prototype = {
    loginErr: PropTypes.string,
    registerErr: PropTypes.string,
    registerMsg: PropTypes.string
}

export default connect((state) => {
    return {
        loginErr: state.error.loginError,
        registerErr: state.error.registerError,
        registerMsg: state.error.registerMsg
    }
})(Landing)