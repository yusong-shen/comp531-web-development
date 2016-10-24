/**
 * Created by yusong on 10/20/16.
 */
import React from 'react'
import Avatar from './avatar'
import ProfileForm from './profileForm'


export const Profile = () => (
    // This is the Profile view.
    <div>
        <div>
            <img src='/img/rice-logo.jpg' width={300} height={100}/>
        </div>
        <div className="row">
            <div className="col-sm-6">
                <Avatar/>
            </div>
            <div className="col-sm-6 form">
                <h4>Profile Form</h4>
                <ProfileForm/>
            </div>
        </div>

    </div>
)

export default Profile