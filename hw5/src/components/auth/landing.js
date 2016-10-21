/**
 * Created by yusong on 10/20/16.
 */
import React from 'react'
import LoginForm from './login'

export const Landing = () => (
    // This is the Profile view.
    <div className="row">
        <div className="col-sm-6">
            <h3>Landing</h3>
            <LoginForm/>
        </div>
    </div>
)

export default Landing