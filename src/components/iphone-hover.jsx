import axios from "axios";
import { useEffect, useState } from "react";

export default function HoverImg() {
    const [image, setImage] = useState([{
        src: ""
    }])
    const [newImg, changeImg] = useState("m1.png")
    function LoadData() {
        axios.get("data.json")
            .then(response => {
                setImage(response.data)
            })
    }
    useEffect(() => {
        LoadData();

    })
    function ChangeImage(e) {
        changeImg(e.target.src)
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1">
                    {
                        image.map(imgsrc =>

                            <div className="m-3">
                                <img alt="imgname" onMouseOver={ChangeImage} src={imgsrc.img_src} style={{ width: "100px" }}></img>
                            </div>
                        )
                    }
                </div>
                <div className="col-4">
                    <img style={{ width: "100%" }} src={newImg} alt="nameimage"></img>
                </div>
            </div>
        </div>
    )
}