import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function UpdateInformasi() {
    const { id, nama, email, password } = useParams()
    const [ newDataUser, setNewDataUser ] = React.useState({
        name: `${nama}`,
        email: `${email}`,
        password: `${password}`
    });

    const updateDataUser = async () => {
        try {
          await axios.put(`http://localhost:3000/users/${id}`, newDataUser);
        } catch (error) {
          console.log(error);
        }
    }

    return (
            <div>
                
                <input type="text" placeholder="Name" value={newDataUser.name} required onChange={(i) => {
                    setNewDataUser((prevState) => ({
                        ...prevState,
                        name: i.target.value
                    }))
                }} /><br />
                <input type="text" placeholder="Email" value={newDataUser.email} required onChange={(i) => {
                    setNewDataUser((prevState) => ({
                        ...prevState,
                        email: i.target.value
                    }))
                }}/><br />
                <input type="text" placeholder="Password" value={newDataUser.password} required onChange={(i) => {
                    setNewDataUser((prevState) => ({
                        ...prevState,
                        password: i.target.value
                    }))
                }}/><br /><br />
                
                <Link to="/detail-informasi">
                    <button className="py-2 px-4 rounded-pill btn-primary" type="submit" onClick={updateDataUser}>Save</button>
                </Link>
            </div>
        )
    }

export default UpdateInformasi;