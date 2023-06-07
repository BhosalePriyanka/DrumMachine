import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const drum = [
  {key:"Q",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
  {key:"W", src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
  {key:"E",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
  {key:"A",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
  {key:"S",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
  {key:"D",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
  {key:"Z",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
  {key:"X",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
  {key:"C",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}
]
const[key,setKey] = useState('')
  const play = (selector) =>{
    const audioTag = document.getElementById(selector)
    audioTag.play()
    console.log(audioTag)  
    setKey(selector)
    
  }
  useEffect(()=>{
document.addEventListener('keydown',(event)=>{
  console.log(event.key)
  play(event.key.toUpperCase())
})
  },[])

  
  return (
    
    <div className="App">
      <div id="drum-machine">
      { drum.map((data)=>
        <>
       
        <button  key= {data.src} className='drum-pad'  id = "data.src" onClick={()=>play(data.key)}> {data.key} 
        <audio className='clip' value={data.key}  id = {data.key} src = {data.src}>{data.key} </audio>
        </button>
       
      </>
      
      )}
      <button  id="display">{key ? key : <p>Display</p>}</button>
      </div>
    </div>
  );
}

export default App;
