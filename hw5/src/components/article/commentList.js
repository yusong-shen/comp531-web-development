/**
 * Created by yusong on 10/25/16.
 */

import React, { PropTypes } from 'react'
import Comment from './comment'

const CommentList = ({ comments}) => (
    <ul>
        {comments.map(c =>
            <Comment
                key={c.id}
                {...c}
            />
        )}
    </ul>
)

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired).isRequired,
}

export default CommentList
