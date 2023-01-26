import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    let url = "https://63d15ca93f08e4a8ff9656ae.mockapi.io/crud-operation"
    const header = { "Access-Control-Allow-Origin": "*" }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(url, {
            name: name,
            email: email,

        }).then((res) => {
            // console.log(res)
            toast.success("Succesfully created", { autoClose: 1000, theme: 'colored' })
            setTimeout(() => {
                navigate("/read")
            }, 1500)

        })


    }
    return (
        <div>
            <div>
                <div class="d-flex justify-content-between m-2">
                    <h2>Create</h2>
                    <Link to="/read">
                        <button className="btn btn-primary">Show Data</button>
                    </Link>
                </div>
            </div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}

export default Create