/**
 * Created by yusong on 10/20/16.
 */

import {resource} from './../util/utils'

export const updateArticles = (articles) => {
    return {
        type: 'updateArticles',
        articles
    }
}

export const addArticle = (article) => {
    return {
        type: 'addArticle',
        article
    }
}

export const toggleComments = (_id, showComments) => {
    return (dispatch) => {
        dispatch({
            type: 'toggleComments',
            _id, showComments
        })
    }
}


// /articles/:id*?	GET, if we don't specific the userId,
// get all the articles for login user
export const fetchArticles = (userId) => {
    const endpoint = (userId) ? `articles/${userId}` : 'articles'
    return (dispatch) => {
        resource('GET', endpoint )
            .then((r) => {
                // add showComments option
                const articles = r.articles.map((x) => {
                    return {
                        ...x,
                        showComments : false,
                    }
                })
                dispatch(updateArticles(articles))
            })
            .catch((err) => {
                alert(err)
            })
    }
}

export const addRemoteArticle = (text) => {
    const endpoint = 'article'
    return (dispatch) => {
        resource('POST', endpoint, { text })
            .then((r) => {
                console.log(r)
                dispatch(addArticle(r.articles[0]))
            })
            .catch((err) => {
                alert(err)
            })
    }
}

export const setKeyword = (keyword) => {
    return {
        type: 'setKeyword',
        keyword
    }
}

export const clearArticles = () => {
    return {
        type: 'clearArticles'
    }
}