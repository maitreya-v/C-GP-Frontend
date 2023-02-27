import React from 'react'
import { Button, Container,Row,Col } from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Activate = () => {
    const navigate=useNavigate();
    const {  id , token } = useParams();
    const tokenGenerator=()=>{
        console.log(id)
        // const headers={
        //     'Content-Type': 'application/json'
        // }
        const obj={
            "uid":id,
            "token":token
        }
        axios.post('http://127.0.0.1:8000/auth/users/activation/',obj)
        .then((res)=>{
            navigate('/')
        })
        .catch((error)=>console.log(error))
    }


  return (
        <Container className='d-flex justify-content-center align-items-center' style={{'height':'70vh'}}>
            <Row>
                <Col>
                    <h1 className='mb-4'>Thank you for registering! One last step</h1>
                    <Button variant='success btn-lg' onClick={tokenGenerator}>Verify</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Activate