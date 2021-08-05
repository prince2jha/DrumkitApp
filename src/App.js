import logo from './logo.svg';
import './App.css';
import DrumSound from './sounds';
import Pad from './components/Pad.js';
import React,{useState} from 'react';

function App() {
  // console.log(DrumSound);
  const [volume,setVolume]  = useState(1);
  return (
    <div className="App">
      <div className="kits">
        <h2>Drum Kit</h2>
        <div className="pad-render">
          {DrumSound.map((clip)=>{
            return (<Pad key={clip.id} clip={clip} volume={volume}/>);
            console.log(clip.id);
          })}
        </div>
        <input type="range" step="0.01" value={volume} min="0" max="1" onChange={(e)=>setVolume(e.target.value)}/>
      </div>
    </div>
  );
}

export default App;
