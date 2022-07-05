import React, {useEffect, useState} from "react";
import axios from "axios";

function Edit(props) {
    let [state, setState] = useState({
        name: "",
        username: "",
        email: "",
        city: "",
        street: "",
        phone: "",
        website: "",
        company: ""
    });

    useEffect(() => {
        setState({
            name: props.name,
            username: props.username,
            email: props.email,
            city: props.address.city,
            street: props.address.street,
            phone: props.phone,
            website: props.website,
            company: props.company.name
        })
    },[]) ;

    function handleChange(event) {
        const name = event.target.name;
        setState(state => {
            return {
                ...state,
                [name]: event.target.value
            }
        });
    }

    function putRequest() {
        const data = {
            name: state.name,
            username: state.username,
            email: state.email,
            address: {
                city: state.city,
                street: state.street
            },
            phone: state.phone,
            website: state.website,
            company: {
                name: state.company
            }
        }
        const promise = axios({
            method: 'put',
            url: 'https://jsonplaceholder.typicode.com/users/' + props.id,
            data: data
        });
        promise.then((response) => {
            console.log(response)
            setState(state => {
                return {
                    ...state,
                    statusText: response.statusText
                }
            });
        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <main className="form-signin">
            <form>
                <div className="form-floating mb-2">
                    <input type="text" className="form-control" id="name" value={state.name} name={"name"}
                           onChange={handleChange}/>
                    <label htmlFor="floatingInput">name</label>
                </div>
                <div className="form-floating mb-2">
                    <input type="text" className="form-control" id="username" value={state.username}
                           name={"username"} onChange={handleChange}/>
                    <label htmlFor="floatingPassword">username</label>
                </div>
                <div className="form-floating mb-2">
                    <input type="text" className="form-control" id="email" value={state.email}
                           name={"email"} onChange={handleChange}/>
                    <label htmlFor="floatingPassword">email</label>
                </div>
                <div className="form-floating mb-2">
                    <input type="text" className="form-control" id="cityInput" value={state.city}
                           name={"city"} onChange={handleChange}/>
                    <label htmlFor="floatingCity">city</label>
                </div>
                <div className="form-floating mb-2">
                    <input type="text" className="form-control" id="streetInput" value={state.street}
                           name={"street"} onChange={handleChange}/>
                    <label htmlFor="floatingStreet">street</label>
                </div>
                <div className="form-floating mb-2">
                    <input type="text" className="form-control" id="phone" value={state.phone}
                           name={"phone"} onChange={handleChange}/>
                    <label htmlFor="floatingPassword">phone</label>
                </div>
                <div className="form-floating mb-2">
                    <input type="text" className="form-control" id="website" value={state.website}
                           name={"website"} onChange={handleChange}/>
                    <label htmlFor="floatingPassword">website</label>
                </div>
                <div className="form-floating mb-2">
                    <input type="text" className="form-control" id="companyInput" value={state.company}
                           name={"company"} onChange={handleChange}/>
                    <label htmlFor="floatingPassword">company</label>
                </div>
            </form>
            <div>
                <button className={"btn btn-primary"} onClick={putRequest}>SAVE</button>
                <div className={"alert-success mt-3"}>
                    <h1 className={"text-center"}>{state.statusText}</h1>
                </div>
            </div>
        </main>
    )

}

export default Edit;