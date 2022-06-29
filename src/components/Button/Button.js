import React, {Component} from 'react';
import "./Button.css"
import Modal from "../Modal/Modal";
import Create from "../Modal/Create";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    show() {
        this.setState({
            visible: true
        });
    }

    hide() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <div>
                <button className={"Button"} onClick={this.show}>
                    {this.props.children}
                </button>
                <Modal visible={this.state.visible} hide={this.hide}>
                    <Create/>
                </Modal>
            </div>
        );
    }
}

export default Button;