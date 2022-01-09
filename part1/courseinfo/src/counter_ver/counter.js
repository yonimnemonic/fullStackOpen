import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({counter})=>{
  return <h1>{counter}</h1>
}


const Button = ({handleClick, text})=>{
  return(
    <>
    <button
     onClick={handleClick}>
       {text}
       </button>
    </>
  )

}


const App = ()=>{
  const [counter, setCounter] = useState(0)

  const increaseByOne = ()=> setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = ()=>setCounter(counter - 1)
  
    
  console.log('rendering...', counter)

  return(
    <>
     <Display counter={counter}/>
     <Button handleClick={increaseByOne} text='plus'/> 
     <Button handleClick={setToZero} text='zero'/> 
     <Button handleClick={decreaseByOne} text='minus'/> 
    
    </>
  )
}


ReactDOM.render(<App /> , document.getElementById('root'));




