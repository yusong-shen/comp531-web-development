/**
 * Created by yusong on 10/20/16.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ContentEditable from './../contentEditable'
import * as articleActions from './../../actions/articleActions'


export const Comment = ({_id, commentId, author, date, text,
    loggedInUser, editComment}) => {
    let commentContent
    return (
        <div className="comment card">
            <div>
                <h5>{`${author} commented at ${date}`}</h5>
            </div>
            <ContentEditable html={text}  onChange={(e) => {
                commentContent = e.target.value
            }} contentEditable={loggedInUser === author}/>
            <div>
                {loggedInUser === author ?
                    <button className="btn btn-warning" onClick={() => {
                        editComment(_id, commentId, commentContent)
                    }} disabled={false}>
                        Edit Comment
                    </button>
                    : null
                }
            </div>
        </div>
    )
}

Comment.protoTypes = {
    _id: PropTypes.string.isRequired,
    commentId: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    loggedInUser: PropTypes.string.isRequired,
}


export default connect((state) => {
    return {
        loggedInUser : state.profile.username
    }
}, articleActions)(Comment)