import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
//localStorage.clear()
const Logout = () => {

    const navigate = useNavigate();

    const headers = {
        'Authorization': `Token ${localStorage.getItem('loginToken')}`
    }

    const logoutHandler = () => {
        console.log("token " + localStorage.getItem('loginToken'));
        // axios.post('http://127.0.0.1:8000/api/logout/', null, { headers })
        //     .then((res) => {
        //         if (res.status === 204){
        //             navigate("/");
        //             localStorage.removeItem('loginToken')
        //         }
        //     })
        //     .catch((e) => {
        //         if (e.response) console.log('request denied')
        //     })


        navigate('/');
        localStorage.clear();
    }

    return (
        <Button variant='primary' onClick={logoutHandler}>Logout</Button>
    )
}

export default Logout