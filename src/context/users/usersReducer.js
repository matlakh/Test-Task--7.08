import { GET_FINAL, GET_USER, GET_USERS, SET_COUNT, SET_LOADING } from "../types"

const handlers = {
    [GET_USERS]: (state, { payload }) => ({...state, users: payload, loading: false }),
    [SET_COUNT]: (state, { payload }) => ({...state, count: payload }),
    [SET_LOADING]: state => ({...state, loading: true }),
    [GET_USER]: (state, { payload }) => ({...state, user: payload, loading: false }),
    [GET_FINAL]: state => ({...state, hideButton: true }),
    DEFAULT: state => state
}


export const usersReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}