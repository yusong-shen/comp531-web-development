/**
 * Created by yusong on 10/24/16.
 */


// export const addTodo = (text) => {
//     return {
//         type: 'ADD_TODO',
//         id: nextTodoId++,
//         text
//     }
// }

export const navigate = (text) => {
    return {
        type: 'navigate',
        text
    }
}

export const setNavItems = (navItems) => {
    console.log('call setNavItems action')
    return {
        type : 'setNavItems',
        navItems
    }
}