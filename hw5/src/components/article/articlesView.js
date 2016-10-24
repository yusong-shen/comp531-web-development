import React from 'react'
import Article from './article'
import SearchBar from './searchBar'

const ArticlesView = React.createClass({
    render() {
        return (
            <div>
                <SearchBar/>
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