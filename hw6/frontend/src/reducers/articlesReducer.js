/**
 * Created by yusong on 10/25/16.
 */

// article schema
// {
//     _id, author, date, img, text, comments
// }

// comment schema
// {
//     commentId, author, date, text
// }
const initState = {
    keyword: '',
    articles:[]
}

const articlesReducer = (state = initState, action) => {
    switch(action.type) {
        case 'setKeyword':
            return {
                ...state,
                keyword: action.keyword
            }
        case 'updateArticles':
            return {
                ...state,
                articles: action.articles
            }
        case 'clearArticles':
            return initState
        case 'addArticle':
            return {
                ...state,
                articles: [
                    ...state.articles,
                    action.article
                ]
            }
        case 'toggleComments':
            return {
                ...state,
                articles : state.articles.map((x) => {
                    if (x._id === action._id) {
                        x.showComments = action.showComments
                    }
                    return x
                })
            }
        default:
            return state
    }
}

export default articlesReducer