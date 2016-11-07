/**
 * Created by yusong on 10/20/16.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


export const Comment = ({commentId, author, date, text, loggedInUser}) => (
        <div>
            <div>
                <h5>{`${author} commented at ${date}`}</h5>
            </div>
            <p>
                {text}
            </p>
            <div>
                {loggedInUser === author ? <button className="btn btn-warning">Edit Comment</button> : null}
            </div>
        </div>
)

Comment.protoTypes = {
    commentId: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    loggedInUser: PropTypes.string.isRequired,
}


export default connect((state) => {
    return {
        loggedInUser : state.profile.username
    }
}, null)(Comment)