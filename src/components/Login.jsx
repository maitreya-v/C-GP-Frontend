import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Login.css";
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {NavLink} from "react-router-dom";
const Login = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate=useNavigate();
  
  const [showErrorMessage, setShowErrorMessage] = useState(true);
  const error=`error ${showErrorMessage ? 'error-visible' : ''}`;
  
  const onLoginHandler=()=>{
    const postObj={
        "email":username,
        "password":password
    }
    // axios.post('http://127.0.0.1:8000/api/login/',postObj).then((res)=>{
    //  if(res.status===200) {
    //   localStorage.setItem('loginToken', res.data.token)
    //   navigate("/home")
    //  }
    // })
    // .catch((error) => {
    //   console.log(error)
    //   if (error.response) {
    //     setShowErrorMessage(false);
    //   }
    // });


    axios.post('http://127.0.0.1:8000/auth/jwt/create/',postObj).then((res)=>{
      localStorage.setItem('access',res.data.access);
      localStorage.setItem('refresh',res.data.refresh);

      if(res.status===200) navigate('/home');
    })
    .catch((error)=>{
      if (error.response) {
          setShowErrorMessage(false);
         }
    })
  }



  return (
    <>



        
      <Container fluid className="login-holder">
        <Row className="">
          <Col md={6} className="d-grid justify-content-center">

            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title className="mb-4">Login Form</Card.Title>
                <form>
                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">
                      Email
                    </label>
                    <input
                      type="username"
                      id="form2Example1"
                      className="form-control"
                      onChange={(e)=>setUsername(e.target.value)}
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form2Example2"
                      className="form-control"
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>

                  {/* <!-- 2 column grid layout for inline styling --> */}
                  <div className="row mb-4">
                  
                 <p className={error}>Can't Login! Please check entered username and password</p>

                  <button type="button" className="btn btn-primary btn-block col-5 offset-1 mb-4" onClick={onLoginHandler}>
                    Log in
                  </button>
                    <div className="col">
                      {/* <!-- Simple link --> */}
                      <NavLink to='forgot/'>Forgot password?</NavLink>
                    </div>
                  </div>

                  {/* <!-- Submit button --> */}

                  {/* <!-- Register buttons --> */}
                  <div className="text-center">
                    <p>
                      Not a member? <a href="register/">Register</a>
                    </p>
                   
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    


    </>
  );
};

export default Login;
