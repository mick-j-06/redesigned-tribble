import React from "react";
import axios from "axios";

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            email: "",
            city : "",
            street : "",
            phone: "",
            website: "",
            company: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.postRequest = this.postRequest.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value,
        });
    }

    postRequest() {
        const data = {
            name : this.state.name,
            username : this.state.username,
            email : this.state.email,
            address : {
                city : this.state.city,
                street : this.state.street
            },
            phone : this.state.phone,
            website: this.state.website,
            company: {
                name: this.state.company
            }
        }

        const promise = axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/users',
            data: data
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
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="nameInput" value={this.state.name} name={"name"}
                               onChange={this.handleChange}/>
                        <label htmlFor="floatingInput">name</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="usernameInput" value={this.state.username}
                               name={"username"} onChange={this.handleChange}/>
                        <label htmlFor="floatingUsername">username</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="emailInput" value={this.state.email}
                               name={"email"} onChange={this.handleChange}/>
                        <label htmlFor="floatingEmail">email</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="cityInput" value={this.state.city}
                               name={"city"} onChange={this.handleChange}/>
                        <label htmlFor="floatingCity">city</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="streetInput" value={this.state.street}
                               name={"street"} onChange={this.handleChange}/>
                        <label htmlFor="floatingStreet">street</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="phoneInput" value={this.state.phone}
                               name={"phone"} onChange={this.handleChange}/>
                        <label htmlFor="floatingPassword">phone</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="websiteInput" value={this.state.website}
                               name={"website"} onChange={this.handleChange}/>
                        <label htmlFor="floatingPassword">website</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="companyInput" value={this.state.company}
                               name={"company"} onChange={this.handleChange}/>
                        <label htmlFor="floatingPassword">company</label>
                    </div>
                </form>
                <div>
                    <button className={"btn btn-primary"} onClick={this.postRequest}>SAVE</button>
                    <div className={"alert-success mt-3"}>
                        <h1 className={"text-center"} >{this.state.statusText}</h1>
                    </div>
                </div>
            </main>
        )
    }
}

export default Create