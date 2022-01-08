import React from 'react';
import ReactDOM from 'react-dom';


const Header = ({course}) => {

   return (
   <div>
     <h1>{course.name}</h1>
   </div>
  )
}


const Content = ({parts})=>{

  const name =  parts.parts[0].name
  const name1 = parts.parts[1].name
  const name2 = parts.parts[2].name
  
  const exercice =  parts.parts[0].exercices
  const exercice1 = parts.parts[1].exercices
  const exercice2 = parts.parts[2].exercices

  
  return(
    <div>
        <p>{name}{exercice}</p>
        <p>{name1}{exercice1}</p>
        <p>{name2}{exercice2}</p>
      </div>
    )
  }


  const Total = ({parts}) => {
   const exercices =  parts.parts[0].exercices
   const exercices1 = parts.parts[1].exercices
   const exercices2 = parts.parts[2].exercices

     return (
     <div>
        <p>Number of exercices:{exercices + exercices1 + exercices2}</p>
      </div>
   )
  
  }
  
const App = ()=>{

  //consts - definitions
  const course ={
  name:'Half Stack application development',
  parts : [
  {
    name: 'Fundamentals of React: ',
    exercices: 10
  },
  {
    name: 'Using props to pass data: ',
    exercices: 7
  },
  {
    name: 'State of a component: ',
    exercices: 14
  }
 ]
}

return(

  <div>
    <Header course={course} />
    <Content parts={course}/>
    <Total parts={course}/>
  </div>
  )
}

ReactDOM.render(<App /> , document.getElementById('root'));


