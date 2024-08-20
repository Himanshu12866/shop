import { useState } from "react"
import './style-binding.css'

export default function StyleBind(){

    const [styles, setStyle] = useState({
        animation: "rotate 6s linear infinite"
    });

    function handleHeight(){
        setStyle({
            animation : "onHover .6s linear infinite"
        })
    }
    function leaveMouse(){
        setStyle({
            animation : "rotate 6s linear infinite"
        })
    }

    return(
        <div >
          <img src="logo512.png" onMouseLeave={leaveMouse} onMouseOver={handleHeight} style={styles} alt="ndn"></img>
        </div>
    )
}