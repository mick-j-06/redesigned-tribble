import React from "react";
import "./modalStyle.css"
import MyInputData from "../MyInputData";
export default function Modal(props){
    return(
        <div className={"Modal"} style={{
            display : props.visible ? "block" : "none"
        }} >
            <div className={"Modal-content"}>
                <button onClick={props.cache} className={"btn btn-close"} ></button>
                <MyInputData/>
            </div>
        </div>
    )
}