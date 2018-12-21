import * as types from '../constants/actionTypes'

export const addTodo = (title, info, time) => ({
    type: types.ADD_TODO,
    title,
    info,
    time
})

export const checkTodo = (title, id) => ({
    type: types.CHECK_TODO,
    title,
    id
})