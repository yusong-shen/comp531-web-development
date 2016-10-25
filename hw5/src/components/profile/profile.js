/**
 * Created by yusong on 10/20/16.
 */
import React from 'react'
import Avatar from './avatar'
import ProfileForm from './profileForm'
import  Headline from './../main/headline'
import ProfileContent from './profileContent'

export const Profile = () => (
    // This is the Profile view.
    <div>
        <div className="text-center">
            <img src='/img/rice-logo.jpg' width={300} height={100}/>
        </div>
        <div className="row">
            <div className="container text-center">
                <ProfileContent/>
            </div>
        </div>
        <div className="row">
            <div className="container text-center">
                <ProfileForm/>
            </div>
        </div>
    </div>
)

export default Profile