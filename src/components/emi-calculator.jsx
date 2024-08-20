
import { useState } from "react";
import "../styles/emi.css";


export default function EMIcalculator() {
    const [amount , setAmount] = useState(0)
    function ChnageAmount(e){
setAmount(e.target.value)
    }
    return (
        <div className="d-flex justify-content-center w-100 align-items-center" style={{ height: "100vh" }}>

            <div className="row">
                <h1>Personal EMI Calculator</h1>
                <div className="col-4">
                    <label className="form-label fw-bold">Amount You Need :</label>
                    <input className="form-control" type="number" onChange={ChnageAmount} value={amount}></input>
                    <div className="d-flex justify-content-between my-2">
                        <div> Min:&#8377; 1,00,00 </div>
                        <div> Max:&#8377; 10,00,000</div>
                    </div>
                    <div className="my-2">
                        <input type="range" onChange={ChnageAmount} className="form-range" value={amount} min={10000} max={1000000}/>
                    </div>

                </div>
                <div className="col-4">
                    <label className="form-label fw-bold">For Years :</label>
                    <input className="form-control" type="number" ></input>
                    <div className="d-flex justify-content-between my-2">
                        <div> Min: 1 Yrs </div>
                        <div> Max: 5 Yrs</div>
                    </div>
                    <div className="my-2">
                        <input type="range" className="form-range" min={1} max={5} />
                    </div>
                </div>
                <div className="col-4">
                    <label className="form-label fw-bold">Interest Rate :</label>
                    <input className="form-control"></input>
                    <div className="d-flex justify-content-between my-2">
                        <div>Min : 10.5 %</div>
                        <div>Max : 21 %</div>
                    </div>
                    <div className="my-2">
                        <input type="range" className="form-range"  min={10.5} max={21} step={0.5}/>
                    </div>
                </div>
            </div>
        </div>
    )
}