import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../actions/loginActions';
import "../Login/login.css"


const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [emailError, setEmailError] = useState();
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        if (email === "admin" && password === "12345") {
            dispatch(login())
            navigate("/products");
        }

        else {
            setEmailError("Wrong credentials");
        }

    }

    return (
        <div class="loginForm">
            <form onSubmit={handleSubmit} sx={{ textColor: "black" }} >

                <TextField
                    required
                    label="Email"
                    name="email"
                    id="outlined-required"
                    helperText={emailError}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <br />
                <br />
                <TextField
                    required
                    label="Password"
                    type="password"
                    name="password"
                    id="outlined-required"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <br />
                <br />
                <Button variant="outlined" type="submit" sx={{ color: "black" }}>Submit</Button>
            </form>
        </div>
    )
}

export default Login;
