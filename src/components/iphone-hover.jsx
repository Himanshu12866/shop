import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/iphone.css"

export default function HoverImg() {
    const [image, setImage] = useState([{
        src: ""

    }])
    const [data, setData] = useState({
        title: "",
        price: 0,
        rating: {
            rate: 0,
            ratings: 0,
            reviews: 0,
        },
        offers: []
    })
    const [newImg, changeImg] = useState("m1.png")
    const [styles, setStyle] = useState({
        border: "",
    })

    function LoadData1() {
        axios.get("data2.json").then(response => {
            setData(response.data)
        })
    }
    useEffect(() => {
        LoadData1()
    })
    function LoadData() {
        axios.get("data.json")
            .then(response => {
                setImage(response.data)
            })
    }
    useEffect(() => {
        LoadData();

    }, [])
    useEffect(() => {
        setStyle(

        )
    }, [])
    function ChangeImage(e) {
        changeImg(e.target.src)
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1">
                    {
                        image.map(imgsrc =>

                            <div className="m-3" style={styles}>
                                <img alt="imgname" onMouseOver={ChangeImage} src={imgsrc.img_src} style={{ width: "100px" }}></img>
                            </div>
                        )
                    }
                </div>
                <div className="col-4">
                    <img style={{ width: "100%" }} src={newImg} alt="nameimage"></img>
                </div>
                <div className="col-7 mt-4">
                    <h3>{
                        data.title
                    }</h3>
                    <h4> &#8377; {data.price.toLocaleString()}</h4>

                    <p className="badge bg-primary">
                        <span className="bi bi-star-fill"> {data.rating.rate} </span>
                    </p>
                    <span> {data.rating.ratings.toLocaleString()} Ratings and {data.rating.reviews.toLocaleString()} Reviews</span>
                    <p className="fw-bold">Available Offers</p>
                    <div>
                        {
                            data.offers.map((offer, index) =>
                                <p><span className="bi bi-tag-fill fs-5 text-primary"></span>{offer}</p>
                            )
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}