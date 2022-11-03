
export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
})

export const editTodo = (newTodo, id) => ({
    type: 'EDIT_TODO',
    newTodo,
    id
})

export const doneTodo = id => ({
    type: 'DONE_TODO',
    id
})

export const addTodo = newTodo => ({
    type: 'ADD_TODO',
    payload: newTodo
})

export const sortTodo = (value) => ({
    type: 'SORT_TODO',
    value
})

export const filterTodo = (value) => ({
    type: 'FILTER_TODO',
    value
})
