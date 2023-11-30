import React, { useState } from 'react'
import Form from './components/Form/Form'
import List from './components/List/List'

const App = () => {
  const [users,setUsers]=useState()
  return (
    <div className='app'>
     <Form/>
     <List users={users}/>


    </div>
  )
}

export default App