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

// /articles/:id*?	GET, if we don't specific the userId,
// get all the articles for login user
export const fetchArticles = (userId) => {
    const endpoint = (userId) ? `articles/${userId}` : 'articles'
    return (dispatch) => {
        resource('GET', endpoint, )
            .then((r) => {
                dispatch(updateArticles(r.articles))
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