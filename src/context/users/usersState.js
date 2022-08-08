import React, { useEffect, useReducer } from "react";
import { GET_FINAL, GET_USERS, SET_COUNT, SET_LOADING } from "../types";
import { UsersContext } from "./UsersContext";
import { usersReducer } from "./usersReducer";
import axios from "axios";

export const UsersState = ({ children }) => {

    const initialState = {
        users: [],
        user: {},
        loading: false,
        count: 2,
        hideButton: false
    }

    const [state, dispatch] = useReducer(usersReducer, initialState)

    useEffect(() => {
        setLoading()
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
            .then(response => response.json())
            .then(json => dispatch({
                type: GET_USERS,
                payload: json.users
            }))
    }, []);

    const setLoading = () => dispatch({ type: SET_LOADING })

    const getUsers = async (oldUsers, count) => {
        try {
            setLoading()
            const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${count}&count=6`)
            let newUsers = [...oldUsers, ...response.data.users]
            dispatch({
                type: GET_USERS,
                payload: newUsers
            })
        } catch {
            dispatch({
                type: GET_FINAL
            })
        }
    }

    const setCountPage = (count) => {
        let newCount = count + 1
        dispatch({
            type: SET_COUNT,
            payload: newCount
        })
    }

    const { users, loading, user, count, hideButton } = state

    return (
        <UsersContext.Provider value={{ setLoading, getUsers, setCountPage, users, loading, user, count, hideButton }}>
            {children}
        </UsersContext.Provider>
    )
}