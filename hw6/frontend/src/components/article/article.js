import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Comment from './comment'
import * as articleActions from './../../actions/articleActions'
import ContentEditable from './../contentEditable'

const Article = ({_id, author, date, img, text, comments, showComments, toggleComments,
    loggedInUser, addRemoteComment, showAddCommentArea, toggleAddCommentArea, editPost}) => {
    let commentArea
    let articleContent
    return (
        <div className="article">
            <div>
                <h4 id={`${_id}_author`}>{`${author} Post at ${date}`}</h4>
                {img ? <img src={img}  width={400} height={300} alt="image missing" /> : null}
            </div>
            <ContentEditable id={`${_id}_text`} className="editPostArea" html={text}  onChange={(e) => {
                articleContent = e.target.value
            }} contentEditable={loggedInUser === author}/>
            <div>
                <button className="btn btn-primary" onClick={() => {
                    toggleComments(_id, !showComments)
                }}>
                    Show Comments
                </button>
                <button className="btn btn-success" onClick={() => {
                    toggleAddCommentArea(_id, !showAddCommentArea)
                }}>
                    {showAddCommentArea ? 'Cancel' : 'Add Comment'}
                </button>
                {loggedInUser === author ?
                    <button className="btn btn-warning editPostBtn" onClick={() => {
                        editPost(_id, articleContent)
                    }} disabled={false}>
                        Edit Post
                    </button>
                    : null
                }
            </div>
            {showAddCommentArea ?
                <div>
                    <textarea rows="5" style={{width:'100%'}} id="commentArea"
                              placeholder="Edit your comment here"
                              ref={(node)=>{ commentArea = node }}/>

                    <button className="btn btn-success" onClick={() => {
                        addRemoteComment(_id, commentArea.value)
                        commentArea.value = ''
                    }}>
                        Publish Comment
                    </button>
                </div>
                : null
            }

            <div>
                <ul>
                    {showComments ? comments.map(c =>
                        <Comment
                            key={c.commentId}
                            _id={_id}
                            {...c}
                        />
                    ) : null}
                </ul>
            </div>
        </div>
    )
}


Article.protoTypes = {
    _id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
        commentId: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    showComments: PropTypes.bool.isRequired,
    toggleComments: PropTypes.func.isRequired,
    loggedInUser: PropTypes.string.isRequired,
    showAddCommentArea: PropTypes.bool.isRequired,
    addRemoteComment: PropTypes.func.isRequired,
    toggleAddCommentArea: PropTypes.func.isRequired,
}

export default connect((state) => {
    return {
        loggedInUser : state.profile.username
    }
}, articleActions)(Article)