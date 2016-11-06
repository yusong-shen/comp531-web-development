/**
 * Created by yusong on 10/20/16.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ProfileForm from './profileForm'
import ProfileContent from './profileContent'
import ErrorMsg from './../errorMsg'

export const Profile = ({passwordMsg}) => (
    // This is the Profile view.
    <div>
        <div className="text-center">
            <img src='/img/rice-logo.jpg' width={300} height={100}/>
        </div>
        <div className="row">
            <div className="container text-center">
                <ProfileContent/>
                {passwordMsg ? <ErrorMsg strong={'Password '} errMsg={passwordMsg} isSuccess={true}/> : null}
            </div>
        </div>
        <div className="row">
            <div className="container text-center">
                <ProfileForm/>
            </div>
        </div>
    </div>
)

Profile.prototype = {
    passwordMsg: PropTypes.string,

}

export default connect((state) => {
    return {
        passwordMsg: state.error.passwordMsg
    }
})(Profile)