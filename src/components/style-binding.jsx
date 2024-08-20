import { useState } from "react"
import './style-binding.css'

export default function StyleBind(){

    const [style, setStyle] = useState('img');

    function handleHeight(){
        setStyle("image")
    }

    return(
        <div >
          <img src="logo512.png" alt="ndn"></img>
        </div>
    )
}