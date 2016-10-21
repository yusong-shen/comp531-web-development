import React from 'react'
import Article from './article'

const ArticlesView = React.createClass({
    render() {
        return (
            <div>
                <div>
                    Search bar to search your feed
                </div>
                <div>
                    <Article/>
                </div>
                <div>
                    <Article/>
                </div>
            </div>
        )
    }
})

export default ArticlesView