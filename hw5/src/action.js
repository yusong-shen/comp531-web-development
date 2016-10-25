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

export const changeNavItems = (navItems) => {
    return {
        type: 'changeNavItems',
        navItems
    }
}