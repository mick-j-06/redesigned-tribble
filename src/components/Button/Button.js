import "./Button.css"
import {useState} from "react";
import Modal from "../Modal/Modal";
import Create from "../Modal/Create";

export default function Button(props){
    let [visible,setVisible] = useState(false);

    function show(){
        setVisible(true) ;
    }
    function hide(){
        setVisible(false) ;
    }
    return (
        <div>
            <button className={"Button"} onClick={show}>
                {props.children}
            </button>
            <Modal visible={visible} hide={hide}>
                <Create/>
            </Modal>
        </div>
    );
}