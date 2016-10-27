/**
 * Created by yusong on 10/20/16.
 */

import {resource} from './../util/utils'

// /articles/:id*?	GET, if we don't specific the userId,
// get all the articles for login user
export const getArticles = (userId) => {
    const endpoint = (userId) ? `articles/${userId}` : 'articles'
    return (dispatch) => {
        resource('GET', endpoint, )
            .then((response) => {
                //TODO
            })
            .catch((err) => {
                alert(err)
            })
    }
}
