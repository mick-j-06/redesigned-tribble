import React, {Component} from 'react';
import "./button.css"
import Modal from "./Modal";
import Create from "./Create";
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
                <button className={"Button"} onClick={this.show} >
                    {this.props.children}
                </button>
                <Modal visible={this.state.visible} cache={this.cache}>
                    <Create/>
                </Modal>
            </div>
        );
    }
}

export default Button;