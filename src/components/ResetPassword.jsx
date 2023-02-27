import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const ResetPassword = () => {
    const {id,token} = useParams()
    const [newpassword,setNewpasswod] = useState("");
    const [renewpassword,setRenewpasswod] = useState("");
    const postObj={
        'uid':id,
        'token':token,
        'new_password':newpassword,
        're_new_password':renewpassword
    }

    const formSubmitHandler = () => {
        console.log(postObj);

         axios.post('http://127.0.0.1:8000/auth/users/reset_password_confirm/',postObj)
         .then((res)=>{
            console.log(res);
         })

         .catch((err)=>{
            console.log(err);
         })
    }


  return (
    <Container h='100vh'>
          <Row>
            <Col className='col-4 offset-4'>
            <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="form2Example1"
                      className="form-control"
                      onChange={(e)=>setNewpasswod(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form2Example2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="form2Example2"
                      className="form-control"
                      onChange={(e)=>setRenewpasswod(e.target.value)}
                    />
                  </div>
                  <Button onClick={formSubmitHandler}>Submit</Button>
                  </Col>
          </Row>
         </Container>
  )
}

export default ResetPassword