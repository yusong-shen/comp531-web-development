import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Comment from './comment'
import { toggleComments } from './../../actions/articleActions'

const Article = ({_id, author, date, img, text, comments, showComments, _toggleComments}) => {
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
                    _toggleComments(_id, !showComments)
                }}>Show Comments</button>
                <button className="btn btn-success">Add Comment</button>
            </div>
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
    _toggleComments: PropTypes.func.isRequired,
}

export default connect(null, (dispatch) => {
    return {
        _toggleComments : (_id, showComments) => {
            toggleComments(_id, showComments)(dispatch)
        }
    }
})(Article)