import { useState } from "react"



export default function ClassBinding() {

    const [rang, setColor] = useState({
        color: "black"
    })
    function ChangeColor(e) {
        setColor({ color: e.target.id })
    }
    function OriginalColor() {
        setColor({color:"black"})
    }
    return (
        <div className="container-fluid">
            <div className="row m-3">
                <div onMouseOver={ChangeColor} onMouseOut={OriginalColor} id="red" className="col-4" style={{ height: "50px", color: "white", textAlign: "center", padding: "10px", backgroundColor: "red" }}>RED</div>
                <div onMouseOver={ChangeColor} onMouseOut={OriginalColor} id="blue" className="col-4" style={{ height: "50px", color: "white", textAlign: "center", padding: "10px", backgroundColor: "blue" }}>BLUE</div>
                <div onMouseOver={ChangeColor} onMouseOut={OriginalColor} id="green" className="col-4" style={{ height: "50px", color: "white", textAlign: "center", padding: "10px", backgroundColor: "green" }}>GREEN</div>
            </div>

            <div>
                <h1 style={rang}>Change text color on mouse ever the color</h1>
            </div>
        </div>
    )
}