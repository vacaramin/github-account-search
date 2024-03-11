import { useState } from 'react'
import CSS from './App.module.css'
import InputForm from "./components/Github-Searching-Input/InputForm"


function App() {
  const [searchResult,setSearchResault] = useState();

  const handleSearchUsername = (username) => {
    setSearchResault(username);
  }

  return (
    <div className={CSS['container']}>
      <h1 className={CSS['heading']}>Github Profile Searching</h1>
      <InputForm SearchUsername={handleSearchUsername}/>
      <p>{searchResult}</p>
    </div>
  )
}

export default App
