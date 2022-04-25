import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TambahInformasi() {
    const [ newDataUser, setNewDataUser ] = React.useState({
        name: ``,
        email: ``,
        password: ``
    });

    const createDataUser = async () => {
        try {
          await axios.post(`http://localhost:3000/users`, newDataUser);
        } catch (error) {
          console.log(error);
        }
    }

    return (
            <div>
                
                <input type="text" placeholder="Name" required onChange={(i) => {
                    setNewDataUser((prevState) => ({
                        ...prevState,
                        name: i.target.value
                    }))
                }} /><br />
                <input type="text" placeholder="Email" required onChange={(i) => {
                    setNewDataUser((prevState) => ({
                        ...prevState,
                        email: i.target.value
                    }))
                }}/><br />
                <input type="text" placeholder="Password" required onChange={(i) => {
                    setNewDataUser((prevState) => ({
                        ...prevState,
                        password: i.target.value
                    }))
                }}/><br /><br />
                
                <Link to="/detail-informasi">
                    <button className="py-2 px-4 rounded-pill btn-primary" type="submit" onClick={createDataUser}>Save</button>
                </Link>
            </div>
        )
    }

export default TambahInformasi;