import * as types from '../constants/actionTypes'
import data from '../data/index'

const getTitle = (list) => {
    return list.map(item => item.title)
}


const item = (state = {}, action) => {
    switch (action.type) {
        case types.CHECK_TODO:
         return state.data.map(i => 
            {
                if (i.id === action.id) {
                    return {
                        ...i,
                        completed: !i.completed
                    }
                } else {
                    return i
                }  
            } 
        )
        default:
            return state
    }
}

const list = (state = data, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            if (getTitle(state).indexOf(action.title) === -1) {
                return [
                    ...state,
                    {
                        title: action.title,
                        data: [
                            {id: 1, info: action.info, time: action.time}
                        ]
                    }
                ]
            } else {
                return state.map(item => {
                    if (action.title === item.title) {
                        return [
                            ...item.data,
                            {
                                id: item.data.length() + 1,
                                info: action.info,
                                time: action.time
                            }
                        ]
                    } else {
                        return item
                    }
                })
            }
        case types.CHECK_TODO:
            return list.map(i => {
                if (i.title === action.title) {
                    return item(i, action)
                }
            })
        default:
            return state
    }
}

export default list