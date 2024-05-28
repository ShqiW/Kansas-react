import React, { useState } from "react";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Array State Variable</h2>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-auto">
                    <button onClick={addElement} className="btn btn-success">Add Element</button>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <ul className="list-group">
                        {array.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {item}
                                <button onClick={() => deleteElement(index)} className="btn btn-danger">
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}