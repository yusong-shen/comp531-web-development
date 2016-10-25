import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Article from './article'
import SearchBar from './searchBar'


const ArticlesView = ({articles}) => {
    return (
        <div>
            <SearchBar/>
            <ul>
                {articles.map(article =>
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
        _id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired,
}

export default connect((state) => {
        return {
            articles: state.articles.articles
        }
    }, null)(ArticlesView)