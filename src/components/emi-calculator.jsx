
import { useState } from "react";
import "../styles/emi.css";


export default function EMIcalculator() {
    const [amount, setAmount] = useState(100000)
    function ChnageAmount(e) {

        setAmount(parseInt(e.target.value))
    }
    const [year, setYear] = useState(1)
    function ChangeYear(e) {
        setYear(e.target.value)
    }
    const [rate, setRate] = useState(10.5)
    function ChangeRate(e) {
        setRate(e.target.value)
    }
    const [emi, setEmi] = useState(0)
    function emiPM(e) {
        if (amount < 100000) {
            alert("Please enter a valid amount")
        } else if (amount > 1000000) {
            alert("Please enter a valid amount")
        }
        else {
            let p = amount;
            let r = rate / 12 / 100;
            let n = year * 12;
            let EMI = p * r * (Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            setEmi(Math.floor(EMI).toLocaleString("en-in", { "style": "currency", "currency": "INR" }))
        }
    }

    return (
        <div className="d-flex justify-content-center w-100 align-items-center" style={{ height: "100vh" }}>
            <div className="row p-3">
                <h1>Personal EMI Calculator</h1>
                <div className="col-lg-4 col-sm-12">
                    <label className="form-label fw-bold">Amount You Need :</label>
                    <input className="form-control" type="number" onChange={ChnageAmount} value={amount}></input>
                    <div className="d-flex justify-content-between my-2">
                        <div> Min:&#8377; 10,00,00 </div>
                        <div> Max:&#8377; 10,00,000</div>
                    </div>
                    <div className="my-2">
                        <input type="range" onChange={ChnageAmount} className="form-range" value={amount} min={100000} max={1000000} />
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <label className="form-label fw-bold">For Years :</label>
                    <input className="form-control" type="number" onChange={ChangeYear} value={year} ></input>
                    <div className="d-flex justify-content-between my-2">
                        <div> Min: 1 Yrs </div>
                        <div> Max: 5 Yrs</div>
                    </div>
                    <div className="my-2">
                        <input type="range" onChange={ChangeYear} className="form-range" value={year} min={1} max={5} />
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <label className="form-label fw-bold">Interest Rate :</label>
                    <input className="form-control" value={rate} onChange={ChangeRate}></input>
                    <div className="d-flex justify-content-between my-2">
                        <div>Min : 10.5 %</div>
                        <div>Max : 21 %</div>
                    </div>
                    <div className="my-2">
                        <input type="range" className="form-range" value={rate} onChange={ChangeRate} min={10.5} max={21} step={0.1} />
                    </div>
                </div>
                <button data-bs-target="#modalId" data-bs-toggle="modal" className="btn btn-dark" onClick={emiPM} >Calculate</button>
            </div>
            <div className="modal fade" id="modalId">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1>Your EMI Result</h1>
                            <button className="btn btn-close bg-warning" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-hover">
                                <tbody>
                                    <tr className="fw-bold">
                                        <td>Amount <span className="bi bi-currency-rupee"></span> </td>
                                        <td> : {amount.toLocaleString('en-in', { style: "currency", currency: "INR" })}</td>
                                    </tr>
                                    <tr className="fw-bold">
                                        <td> Years <span className="bi bi-clock"></span> </td>
                                        <td> : {year} Yr</td>
                                    </tr>
                                    <tr className="fw-bold">
                                        <td>Interest Rate <span className="bi bi-percent"></span> </td>
                                        <td>
                                            : {rate} %
                                        </td>
                                    </tr>
                                    <tr className="fw-bold">
                                        <td>EMI/Month  <span className="bi bi-stack"></span></td>
                                        <td> : {emi}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}