
import { useState } from "react"
import "../styles/overlay.css"
export default function OverLay() {
    const [style1, setStyle] = useState("overlay")

    function ChangeStyle() {
        setStyle("overlay1")
    }
    function CngStl(){
        setStyle("overlay")
    }
    return (
        <div className="box">
            <div className="child">
                <button className="bi bi-list" onClick={ChangeStyle}></button>
                <div className={style1}>
            <button className="btn btn-close" onClick={CngStl}></button>
                </div>

            </div>

        </div>
    )
}