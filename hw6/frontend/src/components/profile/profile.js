/**
 * Created by yusong on 10/20/16.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ProfileForm from './profileForm'
import ProfileContent from './profileContent'
import ErrorMsg from './../errorMsg'
import {putAvatar} from './../../actions/profileActions'

export const Profile = ({passwordMsg, uploadAvatar}) => {
    let fd = new FormData()
    const handleImageChange = (e) => {
        let file = e.target.files[0]
        fd.append('image', file)
    }
    const handleSubmit = _ => {
        if (fd.has('image')) {
            uploadAvatar(fd)
        }
    }
    return (
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
                <div className="container">
                    <div className="col-sm-offset-5 col-sm-4">
                        <div>Upload a new avatar</div>
                        <input id="file-upload" type="file" accept="image/*" size={600}
                               onChange={(e) => {
                                   handleImageChange(e)
                               }}/>
                        <button className="btn btn-success" onClick={() => {
                            handleSubmit()
                        }}>Upload</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container text-center">
                    <ProfileForm/>
                </div>
            </div>
        </div>
    )
}
Profile.prototype = {
    passwordMsg: PropTypes.string.isRequired,
    uploadAvatar: PropTypes.func.isRequired,
}

export default connect((state) => {
    return {
        passwordMsg: state.error.passwordMsg
    }
}, (dispatch) => {
    return {
        uploadAvatar: (fd) => {
            putAvatar(fd)(dispatch)
        }
    }
})(Profile)