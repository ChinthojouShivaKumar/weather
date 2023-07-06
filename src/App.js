import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";


let Whether = () =>{

  const [city, setCity] = useState("")
  const [tem, setTem] = useState(null)
  const[newtem, setNewTem] = useState(null)
  const[speed,setNewSpeed] = useState(null)

  


  let apiKey = 'd597fae1a39846cc1264a5a3fd447c2d'


  let Submitting = (e) =>{
    e.preventDefault()
    const city = e.target[0].value

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then((val)=>{
    
      setTem(val.data.main.temp)
      setNewTem(val.data.main.humidity)
      setNewSpeed(val.data.wind.speed)
     
      console.log(val);
     
    })
   
  
  }

  return(
    <div>
      <h1 id="hname">Whether Api</h1>
      <form onSubmit={Submitting}>
          <input  id="text" type="text"/>
          <input id='btn'type="submit" value="submit"/>
          <p id="demo">{tem}°C</p>
          <p class='demo1'>humidity: {newtem}</p>
          <p class='demo2'>speed: {speed}</p>
         
          
          
      </form>
      
     
      
    </div>
  )
}

export default Whether