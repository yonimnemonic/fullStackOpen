import React, { useState } from 'react';
import ReactdOM from 'react-dom';
import './index.css';


const HandleClick = ({onClick, text}) =>(

  <button onClick={onClick}>
    {text}
  </button>

  )

const Statistics = ({good, neutral, bad, positive, average})=>{

  let all = good + neutral + bad
  average = (good, neutral, bad) /3
  positive = (good / all) *100

  if(good === 0 && neutral === 0 && bad === 0)
    return(
      <h3>No Feedback given</h3>
      
    )
  
    return(
      <>
      <h1>Statistics</h1>
        <table>
              <tbody>
                <tr>
                  <td>Good:</td>
                  <td>{good}</td>
                </tr>
                <tr>
                  <td>Neutral:</td>
                  <td>{neutral}</td>
                </tr>
                <tr>
                  <td>Bad:</td>
                  <td>{bad}</td>
                </tr>
                <tr>
                  <td>All:</td>
                  <td>{all}</td>
                </tr>
                <tr>
                  <td>Average:</td>
                  <td>{average}</td>
                </tr>
                <tr>
                  <td>Positive:</td>
                  <td>{positive}%</td>
                </tr>
                </tbody>     
        </table>
      </>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setneutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  let average
  let positive
 
  const handleGoodClick = ()=>{
    setGood(good + 1)
    setAll(all + 1 )

  }
  const handleneutralClick = ()=>{
    setneutral(neutral + 1)
    setAll(all + 1 )
  }
  const handleBadClick = ()=>{
    setBad(bad + 1)
    setAll(all + 1 )
  }
 
  return (
    <div>
      <h1>Give Feedback</h1>
      <HandleClick onClick={handleGoodClick} text='Good'/>
      <HandleClick onClick={handleneutralClick} text='neutral'/>
      <HandleClick onClick={handleBadClick} text='Bad'/>  
      <Statistics good={good} neutral={neutral} bad={bad} positive={positive} average={average}/>
    </div>
  )
}



ReactdOM.render( <App />,document.getElementById('root')
);


