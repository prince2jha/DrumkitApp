import React from 'react';
import './Pad.css'

const Pad=({clip,volume})=>{
    const [active,setActive]= React.useState(false);
    React.useEffect(()=>{
        document.addEventListener('keydown',handlekeyPress);
        return()=>{
            document.removeEventListener('keydown',handlekeyPress);
        }
    },[]);
    const handlekeyPress=(e)=>{
        if(e.keyCode===clip.keyCode)
            playSound();
    }
    const playSound=()=>{
        const audioTag = document.getElementById(clip.keyTrigger);
        setActive(true);
        setTimeout(()=>setActive(false),200)

        audioTag.volume=volume;
        audioTag.currentTime=0;
        audioTag.play();
    }
    return(
        <div onClick={playSound} className={`pad ${active && 'active-pad'}`}>
            <audio id={clip.keyTrigger} src={clip.url} volume={volume}/>
            {clip.keyTrigger}
        </div>
    );
}

export default Pad;
