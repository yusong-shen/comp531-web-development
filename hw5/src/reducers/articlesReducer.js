/**
 * Created by yusong on 10/25/16.
 */

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
        default:
            return state
    }
}

export default articlesReducer