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

export const toggleAddCommentArea = (_id, showAddCommentArea) => {
    return (dispatch) => {
        dispatch({
            type: 'toggleAddCommentArea',
            _id, showAddCommentArea
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
                        showAddCommentArea : false,
                    }
                })
                dispatch(updateArticles(articles))
            })
            .catch((err) => {
                alert(err)
            })
    }
}

export const addRemoteArticle = (fd) => {
    const endpoint = 'article'
    return (dispatch) => {
        resource('POST', endpoint, fd, true)
            .then((r) => {
                // console.log(r)
                const remoteArticle = r.articles[0]
                remoteArticle.showComments = false
                remoteArticle.showAddCommentArea = false
                dispatch(addArticle(remoteArticle))
            })
            .catch((err) => {
                alert(err)
            })
    }
}

export const addRemoteComment = (_id, text) => {
    const endpoint = `articles/${_id}`
    return (dispatch, getState) => {
        resource('PUT', endpoint, {
            text, commentId : -1
        })
        .then((r) => {
            // console.log(r)
            const remoteArticle = r.articles[0]
            remoteArticle.showComments = true
            remoteArticle.showAddCommentArea = true
            dispatch({
                type : 'editPost', _id,
                article : remoteArticle
            })

        })
        .catch((err) => {
            alert(err)
        })
    }
}

export const editPost = (_id, text) => {
    const endpoint = `articles/${_id}`
    return (dispatch) => {
        resource('PUT', endpoint, {
            text
        })
        .then((r) => {
            console.log(r)
            const remoteArticle = r.articles[0]
            remoteArticle.showComments = false
            remoteArticle.showAddCommentArea = false
            dispatch({
                type : 'editPost', _id,
                article : remoteArticle
            })

        })
        .catch((err) => {
            alert(err)
        })
    }
}

export const editComment = (_id, commentId, text) => {
    const endpoint = `articles/${_id}`
    return (dispatch) => {
        resource('PUT', endpoint, {
            text, commentId
        })
        .then((r) => {
            console.log(r)
            const remoteArticle = r.articles[0]
            remoteArticle.showComments = false
            remoteArticle.showAddCommentArea = false
            dispatch({
                type : 'editPost', _id,
                article : remoteArticle
            })

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