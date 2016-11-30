import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Article from './article'
import SearchBar from './searchBar'


export const ArticlesView = ({articles, keyword}) => {
    const displayList = articles.filter(article => {
        return article.text.indexOf(keyword) !== -1
    })
    return (
        <div>
            <SearchBar/>
            <ul>
                {displayList.map(article =>
                    <Article
                        key={article._id}
                        {...article}
                    />
                )}
            </ul>
        </div>

    )
}

ArticlesView.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        showComments : PropTypes.bool.isRequired,
        showAddCommentArea: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    keyword: PropTypes.string.isRequired,
}

export default connect((state) => {
        return {
            articles: state.articles.articles,
            keyword: state.articles.keyword
        }
    }, null)(ArticlesView)