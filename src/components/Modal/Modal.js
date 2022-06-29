import React from "react";
import "./modalStyle.css"
export default function Modal(props){
    if(props.visible){
        return(
            <div className={"Modal"} >
                <div className={"Modal-content"}>
                    <button onClick={props.hide} className={"btn btn-close"} ></button>
                    {props.children}
                </div>
            </div>
        )
    }
}