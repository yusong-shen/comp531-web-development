import React, { Component, PropTypes } from 'react'
import Comment from './comment'
import {Button} from 'react-bootstrap'

const Article = ({_id, author, date, img, text, comments}) => (
    <div>
        <div>
            <h4>{`Username : ${author} commented at ${date}`}</h4>
            <img src={img} alt="image missing" />
        </div>
        <p>
            {text}
        </p>
        <div>
            <Button bsStyle="primary">Show Comments</Button>
            <Button bsStyle="success">Add Comment</Button>
        </div>
        <div>
            <Comment/>
        </div>
    </div>
)


Article.protoTypes = {
    _id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Article