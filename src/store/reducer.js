import {legacy_createStore as createStore} from 'redux'

const initState = {
    todoList: [],
    current: []
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            const newList1 = [...state.current]
            newList1.push(action.payload)
            return {
                ...state,
                current: newList1,
                todoList: newList1
            }
        case 'DELETE_TODO':
            const newList2 = [...state.current]
            return {
                ...state,
                todoList: newList2.filter(item => {
                    return item.id !== action.id
                })
            } 
        case 'EDIT_TODO':
            const list = [...state.current]
            console.log(list)
            const newLists = list.map(item => 
                item.id === action.id ? action.newTodo : item
                )
            
            return {
                ...state,
                current: newLists,
                todoList: newLists
            } 
        case 'SORT_TODO':
            const newList4 = [...state.todoList]
            if (action.value === 1) {
                newList4.sort((item1, item2) => {
                    let it1 = item1.name.toLowerCase();
                    let it2 = item2.name.toLowerCase();
                    if (it1 < it2) {
                        return -1;
                    }
                    if (it1 > it2) {
                        return 1;
                    }
                    return 0;
                });
            }
            else {
                newList4.sort((item1, item2) => {
                    let it1 = item1.name.toLowerCase();
                    let it2 = item2.name.toLowerCase();
                    if (it1 > it2) {
                        return -1;
                    }
                    if (it1 < it2) {
                        return 1;
                    }
                    return 0;
                });
            }
                
            return {
                ...state,
                todoList: newList4
            } 
        case 'DONE_TODO':
            const newList3 = [...state.todoList].map(item => 
                item.id === action.id ? {...item, isDone: !item.isDone} : item
            )
            return {
                ...state,
                todoList: newList3,
                current: newList3
            } 
        case 'FILTER_TODO':
            if (action.value === 0) {
                return {
                    ...state
                }
            }
            else {
                const newList5 = [...state.current].filter(item => 
                    item.level.value === action.value
                )
                return {
                    ...state,
                    todoList: newList5,
                } 
            }
        default:
            return state 
    }
}

let store = createStore(reducer)

export default store