import React from "react";
import axios from "axios";

class MyInputData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            email: "",
            phone: "",
            website: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.add = this.add.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value,
        });
    }

    add() {
        const promise = axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/users',
            data: this.state
        });
        promise.then((response) => {
            console.log(response)
            this.setState({
                statusText : response.statusText
            });
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <main className="form-signin">
                <form>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="nameInput" value={this.state.name} name={"name"}
                               onChange={this.handleChange}/>
                        <label htmlFor="floatingInput">name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="usernameInput" value={this.state.username}
                               name={"username"} onChange={this.handleChange}/>
                        <label htmlFor="floatingPassword">username</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="emailInput" value={this.state.email}
                               name={"email"} onChange={this.handleChange}/>
                        <label htmlFor="floatingPassword">email</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="phoneInput" value={this.state.phone}
                               name={"phone"} onChange={this.handleChange}/>
                        <label htmlFor="floatingPassword">phone</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="websiteInput" value={this.state.website}
                               name={"website"} onChange={this.handleChange}/>
                        <label htmlFor="floatingPassword">website</label>
                    </div>
                </form>
                <div>
                    <button name={"name"} onClick={this.add}>SAVE</button>
                    <div className={"alert-success m-1"}>
                        <h1 className={"text-center"} >{this.state.statusText}</h1>
                    </div>
                </div>
            </main>
        )
    }
}

export default MyInputData