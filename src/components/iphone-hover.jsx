import axios from "axios";
import { useEffect, useState } from "react";

export default function HoverImg(){
    const [image ,setImage] = useState({
        src: ""
    })
    function LoadData(){
        axios.get("data.json")
        .then(response => {
            setImage(response.data)
        })
    }
    useEffect(() => {
        LoadData();
    })
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    {
                        image.map((img_src,index)=>

                        <img alt="imgname" key={index} src={img_src}></img>
                        )
                    }
                </div>
            </div>
        </div>
    )
}