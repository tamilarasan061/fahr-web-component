import React from 'react'
import {Button,Input} from 'web-ui-component'
import 'web-ui-component/dist/index.css'

const App = () => {
  return (
  <div className="flex w-75 space-x-4 m-2">
    <Input variant={'outlined'} color={'primary'} placeholder="Enter username"/>
    <Button variant={'outlined'} size={'md'} color={'primary'}>Login</Button>
  
  </div>)
}

export default App
