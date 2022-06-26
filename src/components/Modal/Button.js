import React, {Component} from 'react';
import "./button.css"
import Modal from "./Modal";
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
        this.show = this.show.bind(this);
        this.cache = this.cache.bind(this);
    }
    show(){
        this.setState({
            visible : true
        })
    }
    cache(){
        this.setState({
            visible : false
        })
    }
    render() {
        return (
            <div>
                <button className={"Button"} onClick={this.show} >ADD</button>
                <Modal visible={this.state.visible} cache={this.cache} />
            </div>
        );
    }
}

export default Button;