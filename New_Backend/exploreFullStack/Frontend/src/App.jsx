import { useState,useEffect } from 'react'


function App() {
  const [jokes, setJokes] = useState([])
    useEffect(()=>{
      getData();
      console.log('Start');
    },[]);
     async function getData(){
      try{
        const response=await fetch('http://localhost:3000/jokes');
        const data=await response.json();
        console.log(data);
        setJokes(data)
      }catch(error){
        console.log(error);
      }
    }

    
  return (
    <>
          <h1>Length of Jokes is: {jokes.length}</h1>

          {
            jokes.map((joke)=>(
              <div key={joke.id}>
                <h3>{joke.title}</h3>
                <p>{joke.content}</p>
              </div>
            ))
          }
    </>
  )
}

export default App
