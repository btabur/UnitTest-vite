import React, { useState } from 'react'
import Form from './components/Form/Form'
import List from './components/List/List'
import { users as userArr } from './constants/constants'


const App = () => {
  const [users, setUsers] =useState(userArr)

  const addUser = (user)=> {
    setUsers(users.concat(user));
  }
  return (
    <div className='container my-5 app'>
     <Form addUser={addUser}/>
     <List users={users}/>


    </div>
  )
}

export default App