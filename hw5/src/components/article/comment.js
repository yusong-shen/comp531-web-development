/**
 * Created by yusong on 10/20/16.
 */

import React, { Component, PropTypes } from 'react'

const Comment = ({username, timestamp, content}) => (
        <div>
            <div>
                {`Username : ${username} commented at ${timestamp}`}
            </div>
            <p>
                {content}
            </p>
        </div>
)


Comment.protoTypes = {
    username: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Comment