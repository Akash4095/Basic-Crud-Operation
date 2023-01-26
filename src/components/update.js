import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify';

const Update = () => {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")


    const navigate = useNavigate()

    useEffect(() => {
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault()

        axios.put(`https://63d15ca93f08e4a8ff9656ae.mockapi.io/crud-operation/${id}`, {
            name: name,
            email: email,
        }).then((res) => {
            console.log(res)
            toast.success("Succesfully Updated", { autoClose: 1000, theme: 'colored' })
            setTimeout(() => {
                navigate("/read")
            }, 1500)

        })


    }
    return (
        <div>
            <h2>Update</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <button type="submit" className="btn btn-primary mx-2" onClick={(e) => handleUpdate(e)}>Update</button>
                <button type="button" className="btn btn-secondary mx-2" onClick={() => navigate("/read")}>Back</button>
            </form>
        </div>
    )
}

export default Update