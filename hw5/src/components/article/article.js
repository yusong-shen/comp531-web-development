import React from 'react'
import Comment from './comment'

const Article = React.createClass({
    render() {
        return (
            <div>
                <div>
                    Profile, Username, posted on timestamp
                </div>
                <div>
                    Article content
                </div>
                <div>
                    Show comments button, Add Comment button
                </div>
                <div>
                    <Comment/>
                </div>
            </div>
        )
    }
})


export default Article