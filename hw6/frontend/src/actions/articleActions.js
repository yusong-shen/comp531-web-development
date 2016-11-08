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

export const addRemoteArticle = (fd) => {
    const endpoint = 'article'
    return (dispatch) => {
        resource('POST', endpoint, fd, true)
            .then((r) => {
                console.log(r)
                dispatch(addArticle(r.articles[0]))
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
            console.log(r)
            if (!r.articles) {
                alert('articles is undefined')
                return
            }
            const remoteArticle = r.articles[0]
            const localArticle = getState().articles.articles.find(x => x._id === _id)
            if (localArticle.comments.length === remoteArticle.comments.length - 1) {
                // find the added comment
                const f = (remote) => (localArticle.comments.findIndex(local => remote.commentId === local.commentId) === -1)
                const addedComment = remoteArticle.comments.find(f)
                // console.log(localArticle.comments)
                console.log(addedComment)
                if (addedComment) {
                    dispatch({
                        type: 'addComment',
                        _id, comment : addedComment
                    })
                    dispatch({
                        type: 'toggleComments',
                        _id, showComments : false
                    })
                } else {
                    alert('not match comment')
                }
            } else {
                alert('comment add failed')
            }

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