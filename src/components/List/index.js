import "./style.css";
import {useState} from "react";
import Modal from "../Modal/Modal";
import Edit from "../Modal/Edit";
import axios from "axios";

export function UserList(props) {
    const {items} = props;
    let [user, setUser] = useState([]);
    let [visible, setVisible] = useState(false);

    function show() {
        setVisible(true);
    }

    function hide() {
        setVisible(false);
    }

    async function getUser(idUser) {
        const url = "https://jsonplaceholder.typicode.com/users/" + idUser;
        const promise =  axios.get(url) ;
        promise.then(result => {
            const {data} = result;
            setUser(data);
        })
        show();
    }

    let {id, name, username, email,address, phone, website,company} = user;
    return (
        <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
            <div className="dataTable-top">
                <div className="dataTable-dropdown">
                    <label>
                        <select className="dataTable-selector">
                            <option value="5">5</option>
                            <option value="10" selected="">
                                10
                            </option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                        </select>{" "}
                        entries per page
                    </label>
                </div>
                <div className="dataTable-search">
                    <input
                        className="dataTable-input"
                        placeholder="Search..."
                        type="text"
                    />
                </div>
            </div>
            <div className="dataTable-container">
                <table className="table-bordered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                    </tfoot>
                    <tbody>
                    {(items || []).map((item) => (
                        <tr key={`${item.id}-${item.name}`} onClick={() => {
                            getUser(item.id);
                        }}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address.street}, {item.address.city}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                            <td>{item.company.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Modal visible={visible} hide={hide}>
                    <Edit id={id} name={name} username={username} email={email} address={address} phone={phone} website={website} company={company} />
                </Modal>
            </div>
            <div className="dataTable-bottom">
                <div className="dataTable-info">Showing 1 to 10 of 57 entries</div>
                <nav className="dataTable-pagination">
                    <ul className="dataTable-pagination-list">
                        <li className="active">
                            <a href="#" data-page="1">
                                1
                            </a>
                        </li>
                        <li className="">
                            <a href="#" data-page="2">
                                2
                            </a>
                        </li>
                        <li className="">
                            <a href="#" data-page="3">
                                3
                            </a>
                        </li>
                        <li className="">
                            <a href="#" data-page="4">
                                4
                            </a>
                        </li>
                        <li className="">
                            <a href="#" data-page="5">
                                5
                            </a>
                        </li>
                        <li className="">
                            <a href="#" data-page="6">
                                6
                            </a>
                        </li>
                        <li className="pager">
                            <a href="#" data-page="2">
                                ›
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}