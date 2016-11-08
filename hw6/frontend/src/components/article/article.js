import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Comment from './comment'
import { toggleComments, addRemoteComment, toggleAddCommentArea } from './../../actions/articleActions'


const Article = ({_id, author, date, img, text, comments, showComments, toggleComments,
    loggedInUser, addRemoteComment, showAddCommentArea, toggleAddCommentArea}) => {
    let commentArea
    return (
        <div>
            <div>
                <h4>{`${author} Post at ${date}`}</h4>
                {img ? <img src={img}  width={400} height={300} alt="image missing" /> : null}
            </div>
            <p>
                {text}
            </p>
            <div>
                <button className="btn btn-primary" onClick={() => {
                    toggleComments(_id, !showComments)
                }}>Show Comments</button>
                <button className="btn btn-success" onClick={() => {
                    toggleAddCommentArea(_id, !showAddCommentArea)
                    console.log(showAddCommentArea)
                }}>{showAddCommentArea ? 'Cancel' : 'Add Comment'}</button>
                {loggedInUser === author ?
                    <button className="btn btn-warning">Edit Post</button>
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
                    }}>Publish Comment</button>

                </div>
                : null
            }

            <div>
                <ul>
                    {showComments ? comments.map(c =>
                        <Comment
                            key={c.commentId}
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
}, { toggleComments, addRemoteComment, toggleAddCommentArea })(Article)