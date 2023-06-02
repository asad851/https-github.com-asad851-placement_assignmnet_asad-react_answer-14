import React, { useEffect, useState } from "react";

function App() {
  const [move, setMove] = useState("");
 
  const [player, setplayer] = useState("One")
  let buttons = document.getElementsByClassName('buttons');
  
  const handleClick=(e)=>{
    console.log(e.target)
   if(player=="One"){
    if(e.target.innerHTML==""){
      e.target.innerHTML="X"
    }
   }else{
    if(e.target.innerHTML==""){
      e.target.innerHTML="O"
    }
   }
  }
  useEffect(() => {
  let btn=  Array.from(buttons)
  if(btn[0].innerHTML=="X"){
    console.log("won")
  }
  }, [player])
  
  return (
    <div className="container">
    <div className="ticcontainer">
      <button onClick={handleClick} className="buttons"></button>
      <button onClick={handleClick} className="buttons"></button>
      <button onClick={handleClick} className="buttons"></button>
      <button onClick={handleClick} className="buttons"></button>
      <button onClick={handleClick} className="buttons"></button>
      <button onClick={handleClick} className="buttons"></button>
      <button onClick={handleClick} className="buttons"></button>
      <button onClick={handleClick} className="buttons"></button>
      <button onClick={handleClick} className="buttons"></button>
    </div>
   <div> <button onClick={()=>{setplayer("One")}}>X</button>
    <button onClick={()=>{setplayer("Two")}}>O</button></div>
    </div>
  );
}

export default App;
