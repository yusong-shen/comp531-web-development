/**
 * Created by yusong on 10/20/16.
 */


import React, { Component, PropTypes } from 'react'
import {Button} from 'react-bootstrap'

const Following = ({username, avatar, headline}) => (
    <div>
        <div>
            <h4>{username}</h4>
            <img src={avatar} alt="image missing" />
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