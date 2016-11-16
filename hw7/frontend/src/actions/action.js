/**
 * Created by yusong on 10/24/16.
 */

export const navigate = (text) => {
    return {
        type: 'navigate',
        text
    }
}

export const clearError = () => {
    return (dispatch) => {
        dispatch( { type : 'errClear'})
    }
}
