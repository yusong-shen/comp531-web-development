/**
 * Created by yusong on 10/20/16.
 */


import React, { Component, PropTypes } from 'react'
import {Button} from 'react-bootstrap'

const Following = ({username, headline}) => (
    <div>
        <div>
            <h4>{username}</h4>
            <img src="https://placekitten.com/200/150?image=7" alt="image missing" />
        </div>
        <div>
            {headline}
        </div>
        <Button bsStyle="primary">Unfollow</Button>

    </div>

)

Following.protoTypes = {
    username: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
}

export default Following