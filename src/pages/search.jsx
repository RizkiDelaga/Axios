import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Search({Link}) {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp => resp.json())
        .then((data) => setUsers(data))
        .catch(err => console.log(err))
    }, []);

    const detailId = (id) => {
        navigate(`/search/${id}`)
    }

    return (
            <>
                <h1>Hasil Pencarian</h1>
                <Link to="/"><p>Back to Home</p></Link>

                <br /><hr /><br />
                <ul>
                    {
                        users.map((user) => {
                            return (
                                <li key={user.id}>
                                    {user.name} | <button onClick={() => detailId(user.id)}>Pindah ID</button>
                                </li>
                            )
                        })
                    }
                </ul>

                <br /><hr /><br />
            </>
        )
    }

export default Search;