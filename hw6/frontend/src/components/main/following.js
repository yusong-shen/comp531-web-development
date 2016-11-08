/**
 * Created by yusong on 10/20/16.
 */


import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Avatar from './../profile/avatar'
import { deleteFollowing } from './../../actions/followingActions'

const Following = ({name, username, avatar, headline, deleteFollowing}) =>  {
    const handleSubmit = _ => {
        deleteFollowing(username)
    }
    return (
        <div name={name}>
            <div>
                <Avatar avatar={avatar}/>
                <h4>{username}</h4>
            </div>
            <div>
                {headline}
            </div>
            <button id={`unfollowBtn_${username}`} className="btn btn-primary" onClick={_ => {
                handleSubmit()
            }}>Unfollow</button>

        </div>

    )
}


Following.protoTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    deleteFollowing: PropTypes.func.isRequired,
}

export default connect(
    null,
    { deleteFollowing }
)(Following)