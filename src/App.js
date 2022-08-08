import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Register from './components/Register/Register'
import Users from './components/Users/Users'
import { UsersState } from './context/users/usersState'

const App = () => {
  return (
    <UsersState>
      <Header></Header>
      <Main></Main>
      <Users></Users>
      <Register></Register>
    </UsersState>
  )
}

export default App