/**
 * Created by yusong on 10/20/16.
 */


import React, { Component, PropTypes } from 'react'
import {Button} from 'react-bootstrap'
import Avatar from './../profile/avatar'

const Following = ({username, avatar, headline}) => (
    <div>
        <div>
            <Avatar avatar={avatar}/>
            <h4>{username}</h4>
        </div>
        <div>
            {headline}
        </div>
        <Button bsStyle="primary">Unfollow</Button>

    </div>

)

Following.protoTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
}

export default Following