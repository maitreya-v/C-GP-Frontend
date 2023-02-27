import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
const ForgotPassword = () => {
  const [email,setEmail] = useState("");
  const formSubmitHandler=()=>{
    // console.log(email);

    axios.post('http://127.0.0.1:8000/auth/users/reset_password/',{'email':email})
    .then((res)=>{
       console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
         <Container h='100vh'>
          <Row>
            <Col className='col-4 offset-4'>
            <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="form2Example1"
                      className="form-control"
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                  <Button onClick={formSubmitHandler}>Submit</Button>
                  </Col>
          </Row>
         </Container>
    </>
  )
}

export default ForgotPassword