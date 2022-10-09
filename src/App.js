import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";
import { useState } from 'react';

function App() {
 
  const lengthContainer=document.getElementById('length')
  const volumeContainer=document.getElementById('volume')
  const massContainer=document.getElementById('mass')
  let volumeParagraphEl=""
  let  massParagraphEl=""
  let lengthParagraphEl=""
  lengthParagraphEl+=null
  const [message,setMessage]=useState("");
   const handleChange=event=>{
    event.preventDefault()
    setMessage(event.target.value)
    console.log(message)
   }
 
  function UnitConversion(){
     setMessage("")
     reset()
   if(message===""){
     alert("Units Cannot be Empty")
   }
   else{
    render()
     
   }
  function render(){
    lengthParagraphEl=`<p style="margin-top:-20px" >${message} metres=${(message*3.28084).toFixed(3)} Feet | ${message} Feet=${(message*0.30).toFixed(3)} metres</p>`
    volumeParagraphEl=`<p style="margin-top:-20px" >${message} liters=${(message*0.264172).toFixed(3)} Gallons | ${message} Gallons=${(message*3.785412).toFixed(3)} liters</p>` 
    massParagraphEl=`<p style="margin-top:-20px" >${message} kilos=${(message*2.2).toFixed(3)} pounds | ${message} pounds=${(message/2.2).toFixed(3)} Kilos</p>`
    lengthContainer.innerHTML+=lengthParagraphEl
   console.log(lengthContainer.innerHTML)
   volumeContainer.innerHTML+=volumeParagraphEl
   massContainer.innerHTML+=massParagraphEl
  }
  function reset(){
    lengthContainer.innerHTML=""
    massContainer.innerHTML=""
    volumeContainer.innerHTML=""
  }
  }
  return (
   <>
    <div className='container'>
       <div className='content'>
        <div className='top'>
            <p className='p1'>Metric/imperial unit Conversion</p>
            <input onChange={handleChange} type="text"value={message} />
            <button onClick={UnitConversion} className='btn'>Convert</button>
            <div style={{marginTop:"5em"}} className='length'>
              <p style={{padding:"15px",fontSize:"20px"}}>Length(Meter/Feet)</p>
             <div id='length'>

             </div>
        </div>
        <div className='length'>
              <p style={{padding:"15px",fontSize:"20px"}}>Volume(Liters/Gallons)</p>
              <div id='volume'>

              </div>
              
        </div>
            <div className='length'>
              <p style={{padding:"15px",fontSize:"20px"}}>Mass(KiloGrams/Pounds)</p>
               <div id='mass'>

               </div>
        </div>
        </div> 
       </div>
    </div>
   </>
  );
}

export default App;
