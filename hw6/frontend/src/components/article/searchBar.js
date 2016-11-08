/**
 * Created by yusong on 10/23/16.
 */


import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import * as ArticleActions from '../../actions/articleActions'

class SearchBar extends Component {
    handleFormSubmit = (values) => {
        const keyword = values.keyword || ''
        this.props.setKeyword(keyword)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                <div>
                    <Field id="keyword" name="keyword" component="input" type="text" placeholder="Search..."/>
                    <button id="searchBtn" type="submit">Search</button>
                </div>
            </form>
        );
    }
}

// Decorate the form component
SearchBar = reduxForm({
    form: 'searchBar' // a unique name for this form
})(SearchBar);


export default connect(null, ArticleActions)(SearchBar)