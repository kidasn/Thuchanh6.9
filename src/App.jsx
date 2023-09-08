import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from './assets/Components/Main'
import Table from './assets/Components/Table'

function App() {
  const [doList, setDoList] = useState([]);


  return (
    <>
      App nè
      <Main doList={doList} setDoList = {setDoList}/>
      <Table doList = {doList}/>
    </>
  )
}

export default App
