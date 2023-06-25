import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import URL from '../helpers/url'
const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [pass, setPassword] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name);
        console.log(pass);
        let payload = {
            email: name,
            password: pass
        }
        try {
            fetch(`${URL}user/login`,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(data => {window.id = data.user._id; if(window.id){navigate('/admin')} else{console.log('Not a valid User!')}});
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
        <form className='shadow rounded p-5' style={{ width: "40%" }} onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}

export default Login