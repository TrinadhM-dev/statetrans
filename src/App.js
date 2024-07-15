import AnimalShow from './AnimalShow';
import { useState } from "react";
import appCss from './App.css';
const RandomAnime = ()=>{
const animals = ['bird','cat','dog','gator','cow','horse'];
  return animals[Math.round(Math.random()*animals.length)]; 
}
function App(){
    //Array Destructuring
//  const [count,setCount] = useState(0);
 const [animals,setAnimal] = useState([]);
    
 const handleClick =() =>{
        // setCount(count+1);
        setAnimal([...animals,RandomAnime()])
    }

 const renderedAnimals = animals.map((animal,index)=>{
    console.log({animal});
    return <AnimalShow type={animal}
     key={index}></AnimalShow>
 })


    return (<div className='app'>

        <button onClick={handleClick}> Add Animal</button>
        {/* <div>Number of animals {count}</div> */}
        <div className='animal-list'>{renderedAnimals}</div>
         </div>)
}

export default App;