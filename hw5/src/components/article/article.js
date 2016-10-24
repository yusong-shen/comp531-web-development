import React from 'react'
import Comment from './comment'
import {Button} from 'react-bootstrap'

const Article = React.createClass({
    render() {
        return (
            <div>
                <div>
                    <h4> Profile, Username, posted on timestamp</h4>
                </div>
                <div>
                    <p>
                        Article content
                    </p>
                </div>
                <div>
                    <Button bsStyle="primary">Show Comments</Button>
                    <Button bsStyle="success">Add Comment</Button>

                </div>
                <div>
                    <Comment/>
                </div>
            </div>
        )
    }
})


export default Article