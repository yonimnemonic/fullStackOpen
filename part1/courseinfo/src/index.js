import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
   return (
    <h1>{props.course}</h1>
  )
}

 const Content = (props) => {

  return (
     
    <>
      <p>
      {props.part1} {props.exercices1}
      </p>
      <p>
      {props.part2} {props.exercices2}
      </p>
      <p>
      {props.part3} {props.exercices3}
      </p>
    </>
    
  )
  
}

const Total = (props)=>{
    return(
      <p>Number of exercices: { props.exercice1 + props.exercice2 + props.exercice3}</p>
    )
}

const App = ()=>{

  //consts definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercices1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


return(
   
  <div>
    <Header course={course} />
    <Content part1={part1} exercices1={exercices1}/>
    <Content part2={part2} exercices2={exercises2}/>
    <Content part3={part3} exercices3={exercises3}/>
    <Total exercice1={10} exercice2={7} exercice3={14} /> 
  </div>
  )
}

ReactDOM.render(<App /> , document.getElementById('root'));


