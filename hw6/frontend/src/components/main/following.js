/**
 * Created by yusong on 10/20/16.
 */


import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Avatar from './../profile/avatar'
import { deleteFollowing } from './../../actions/followingActions'

const Following = ({username, avatar, headline, deleteFollowing}) =>  {
    const handleSubmit = _ => {
        deleteFollowing(username)
    }
    return (
        <div>
            <div>
                <Avatar avatar={avatar}/>
                <h4>{username}</h4>
            </div>
            <div>
                {headline}
            </div>
            <button className="btn btn-primary" onClick={_ => {
                handleSubmit()
            }}>Unfollow</button>

        </div>

    )
}


Following.protoTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    // removeFollowing : PropTypes.func.isRequired,
}

// // redux-thunk
// const mapDispatchToProps = (dispatch, getState) => {
//     return {
//         removeFollowing: (userId) => {
//             return deleteFollowing(userId)(dispatch, getState)
//         }
//     }
// }

export default connect(
    null,
    { deleteFollowing }
)(Following)