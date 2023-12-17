import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [val,setval] = useState(0);

const AddValue=()=>
{
  if(val<10)
  setval(val+1)

  //to increment the values in a batch we have to get prev counter value and have to store  and through call back have to increase
  // setval(val=>val+1)
  // setval(val=>val+1)
  // setval(val=>val+1)
  //this will not work if we do 
  // setval(val+1)
  // setval(val+1)
  // setval(val+1)
}

const RemoveValue=()=>
{
  if(val>0)
  setval(val-1)
}

const ResetValue =()=>
{
  setval(0)
}
  return (
    <>
    <h1>Hello Counter</h1>
    <h2>counter value : {val}</h2>
    <button onClick={AddValue}>Add value</button>
    <button onClick={RemoveValue}>Remove value</button>
    <button onClick={ResetValue}>Reset Value</button>
    </>
  )
}

export default App
