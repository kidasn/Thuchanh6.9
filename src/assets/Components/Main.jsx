import React, { useState } from 'react'

export default function Main({doList,setDoList}) {
    const [inputValue, setInputValue] = useState("")
    function addDoList() {
        let tempArray = [...doList];
        tempArray.unshift(inputValue);
        setDoList(tempArray);
        setInputValue("");
        
    }
  return (
    <div>
        <h1>My To Do List</h1>
        <form action="">
            <input onChange={(e)=>{
                setInputValue(e.target.value);
            }} value={inputValue} type="text" />
            <button onClick={()=>{
                addDoList();
            }} type='button'>Add</button>
        </form>
    </div>
  )
}
