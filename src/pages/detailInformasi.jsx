import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function DetailInformasi() {
    const [ dataUsers, setDataUsers ] = React.useState([]);
    const navigate = useNavigate()

    React.useEffect(() => {
        getDataUser();
    }, []);

    const getDataUser = () => {
        axios
        .get('http://localhost:3000/users')
        .then((res) => setDataUsers(res.data))
        .catch((err) => console.log(err))
    }

    // const getDataUser = async () => {
    //     try {
    //       const res = await axios.get('http://localhost:3000/users');
    //       setDataUsers(res.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    // }

    const deleteDataUser = async (idUser) => {
        try {
          await axios.delete(`http://localhost:3000/users/${idUser}`);
          getDataUser()
        } catch (error) {
          console.log(error);
        }
    }

    const getIdUser = (idUser, nameUser, emailUser, passUser) => {
        navigate(`/update-informasi/${idUser}/${nameUser}/${emailUser}/${passUser}`)
    }

    return (
            <div className="px-5">
                <button className="py-2 px-4 rounded-pill btn-primary" type="submit" onClick={getDataUser}>Sync</button>
                
                <br /><br />
                <h1 className='text-center'>Detail Informasi User</h1>
                <Link to="/tambah-informasi">
                    <button className="py-2 px-4 rounded-pill btn-success" type="submit">Tambah Imformasi</button>
                </Link>

                {dataUsers.map((item) => {
                    return(
                        <div key={item.id}>
                            <hr />
                            <p>Nama : <strong>{item.name}</strong></p>
                            <p>Email : <strong>{item.email}</strong></p>
                            <p>Password : <strong>{item.password}</strong></p>
                            <button className="px-2 rounded-pill btn-warning" onClick={() => getIdUser(item.id, item.name, item.email, item.password)}>Edit</button>
                            <button className="px-2 rounded-pill btn-danger" onClick={() => deleteDataUser(item.id)}>Hapus</button>
                        </div>
                    )
                })}
            </div>
        )
    }

export default DetailInformasi;