/**
 * Created by yusong on 10/20/16.
 */
import React from 'react'
import Avatar from './avatar'
import ProfileForm from './profileForm'


export const Profile = () => (
    // This is the Profile view.
    <div>
        <div className="row">
            <div className="col-sm-6">
                <h3>Profile</h3>
                <h4>Avatar</h4>
                <Avatar/>
            </div>
        </div>
        <div>
            <h4>Logo Picture</h4>
        </div>
        <div className="row">
            <div className="col-sm-6">
                <h4>Profile Form</h4>
                <ProfileForm/>
            </div>
        </div>
    </div>
)

export default Profile