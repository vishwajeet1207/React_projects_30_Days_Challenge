import React, { useState } from 'react'

function App()
{
  const [min,setmin]= useState(1);
  const [max,setmax]= useState(100000);
  const [random,setrandom]=useState(null);

  const gen=()=>{
    const minv=parseInt(min);
    const maxv=parseInt(max);
    const random=Math.floor(Math.random() *(maxv+1)+minv)
    setrandom(random);
    }

  return(
   <div>
    <h1>Random Genereter</h1>
     <button onClick={gen}>Generate</button>
     <h1>Random Number :{random}</h1>
    
   </div>
  )
}

export default App;
