/**
 * Created by yusong on 10/20/16.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ProfileForm from './profileForm'
import ProfileContent from './profileContent'
import ErrorMsg from './../errorMsg'
import {putAvatar, updatePreview, linkAccount, unlinkAccount} from './../../actions/profileActions'
import { url } from '../../util/utils'

export const Profile = ({passwordMsg, uploadAvatar, previewUrl,
    _updatePreview, _linkAccount, _unlinkAccount}) => {
    let fd = new FormData()
    const handleImageChange = (e) => {
        let file = e.target.files[0]
        // console.log(file)
        // const url = URL.createObjectURL(file)
        // console.log('file url :', url)
        _updatePreview(url)
        fd.append('image', file)
        // console.log(fd.get('image'))
    }
    const handleSubmit = _ => {
        // console.log('submit')
        // console.log(fd.get('image'))
        if (fd.has('image')) {
            uploadAvatar(fd)
            // _updatePreview(null)
        }
    }
    const handleLink = _ => {
        _linkAccount()
        console.log("link")
    }
    const handleUnlink = _ => {
        _unlinkAccount()
        console.log("Unlink")
    }
    const linkAccountMsg = 'Link : click Link Account button will redirect you to the login page, ' +
        'then enter the account information you want to link.'
    const unlinkAccountMsg = 'Unlink : it will redirect you to the main page'

    return (
        // This is the Profile view.
        <div>
            <div className="text-center">
                <img src='/img/rice-logo.jpg' width={300} height={100}/>
            </div>
            <div className="row">
                <div className="container text-center">
                    <ProfileContent/>
                    {passwordMsg ? <ErrorMsg id="passwordMsg" strong={'Password '} errMsg={passwordMsg} isSuccess={true}/> : null}
                    <a href={`${url}/linkAccount`} className="btn btn-info">Link Account</a>
                    <a href={`${url}/unlinkAccount`} className="btn btn-danger">Unlink Account</a>
                    <ErrorMsg id="linkAccountMsg" strong={'Link Account: '} errMsg={linkAccountMsg} isSuccess={false}/>
                    <ErrorMsg id="unlinkAccountMsg" strong={'Unlink Account: '} errMsg={unlinkAccountMsg} isSuccess={false}/>

                </div>
                <div className="container">
                    <div className="col-sm-offset-5 col-sm-4">
                        <input id="file-upload" type="file" accept="image/*" size={600}
                               onChange={(e) => {
                                   handleImageChange(e)
                               }}/>
                        <button className="btn btn-success" onClick={() => {
                            handleSubmit()
                        }}>Upload</button>
                    </div>
                </div>

                <div className="container text-center">
                    {previewUrl ?
                        <div>
                            <h4>Preview</h4>
                            <img src={previewUrl} width={300} height={300} alt="image missing" />
                        </div>
                         : null}
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
    previewUrl: PropTypes.string.isRequired,
    _updatePreview: PropTypes.func.isRequired,
}

export default connect((state) => {
    return {
        passwordMsg: state.error.passwordMsg,
        previewUrl: state.profile.previewUrl
    }
}, (dispatch) => {
    return {
        uploadAvatar: (fd) => {
            putAvatar(fd)(dispatch)
        },
        _updatePreview: (previewUrl) => {
            updatePreview(previewUrl)(dispatch)
        },
        _linkAccount: () => {
            linkAccount()(dispatch)
        },
        _unlinkAccount: () => {
            unlinkAccount()(dispatch)
        }
    }
})(Profile)