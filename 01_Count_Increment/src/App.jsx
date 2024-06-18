import React,{useState} from "react";



function App(){
  const [count,setCount]=useState(0);
const handleincrease=()=>{
  setCount(count + 1);
}

  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleincrease}>Increase</button>
    </div>
  )
}

export default  App;