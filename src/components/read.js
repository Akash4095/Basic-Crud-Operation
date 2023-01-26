import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import { Link } from 'react-router-dom';


const Read = () => {

    const [fetchData, setfetchData] = useState([])
    const [tabledark, setTableDark] = useState("")


    const getData = () => {
        axios
            .get("https://63d15ca93f08e4a8ff9656ae.mockapi.io/crud-operation")
            .then((res) => {
                setfetchData(res.data)
                console.log(res.data)
            })
    }

    const handleDelete = (id) => {
        axios.delete(`https://63d15ca93f08e4a8ff9656ae.mockapi.io/crud-operation/${id}`)
            .then((res) => {
                getData()
                toast.success("Succesfully Deleted", { autoClose: 1000, theme: 'colored' })
            })
    }

    const handleEdit = (id, name, email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }

    const tableDarkFunction = () => {
        if (tabledark !== 'table-dark') {
            setTableDark("table-dark")
        } else {
            setTableDark("")
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <div class="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => tableDarkFunction()} />
            </div>
            <div>
                <div class="d-flex justify-content-between m-2">
                    <h2>Read Operation</h2>
                    <Link to="/">
                        <button className="btn btn-primary">Go To Create</button>
                    </Link>
                </div>
            </div>
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {fetchData.map((item) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td scope="col"></td>
                                <td>
                                    <Link to='/update'>
                                        <button type="button" className="btn btn-success" onClick={() => handleEdit(item.id, item.name, item.email)}>Edit</button>
                                    </Link>
                                </td>
                                <td> <button type="button" className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button></td>
                            </tr>
                        )
                    })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Read