/**
 * Created by yusong on 10/20/16.
 */

import React, { Component, PropTypes } from 'react'

const Comment = ({commentId, author, date, text}) => (
        <div>
            <div>
                <h5>{`${author} commented at ${date}`}</h5>
            </div>
            <p>
                {text}
            </p>
        </div>
)

Comment.protoTypes = {
    commentId: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Comment