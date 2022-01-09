import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const App = ()=>{
  
  const [clicks, setClicks] = useState({
    left:0,
    right:0,
  })
  
  const handleLeftClick = ()=>{
      const newClick = {
        ...clicks,
        left: clicks.left + 1,
      }
      setClicks(newClick)

  }
  const handleRightClick = ()=>{
      const newClick = {
        ...clicks,
        right: clicks.right + 1,
      }
      setClicks(newClick)

  }

  return(
    <>
      {clicks.left}
      <button onClick={ handleLeftClick }>
      left
        </button>
      <button onClick={ handleRightClick }>
      right
        </button>
      {clicks.right}
    </>
  )
}


ReactDOM.render(<App /> , document.getElementById('root'));




