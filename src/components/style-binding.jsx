import { useState } from "react"
import './style-binding.css'

export default function StyleBind() {

    const [styles, setStyle] = useState({
        animation: "rotate 6s linear infinite"
    });
    const [styles2, setStyle2] = useState(
        "before"
    )

    function handleHeight() {
        setStyle({
            animation: "onHover .6s linear infinite"
        })
    }
    function leaveMouse() {
        setStyle({
            animation: "rotate 6s linear infinite"
        })
    }
    function HnadleClick() {
        setStyle2("Click")
    }
    function ResetStyle(){
        setStyle2("before")
    }

    return (
        <div onClick={HnadleClick}  className={styles2} onDoubleClick={ResetStyle} >
            <img className={{ styles2 }} src="logo512.png"  onMouseLeave={leaveMouse} onMouseOver={handleHeight} style={styles} alt="ndn"></img>
        </div>
    )
}