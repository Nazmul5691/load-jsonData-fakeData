

import { useState } from 'react'
import './App.css'
import Watch from './Components/Watch'
import { useEffect } from 'react';

function App() {
  
  const [watches, setWatches] = useState([]);

 
  useEffect(() =>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])

  // const watches = [
  //   { id: 1, name: "Luxora Chrono", price: 249.99 },
  //   { id: 2, name: "AquaMaster Diver", price: 179.50 },
  //   { id: 3, name: "SilverEdge Classic", price: 129.99 },
  //   { id: 4, name: "Midnight Blaze", price: 199.95 },
  //   { id: 5, name: "Timeless Quartz", price: 159.99 }
  // ];
  

  return (
    <>
      
      <h1>Vite + React</h1>

      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
      
    </>
  )
}

export default App
