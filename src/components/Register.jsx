import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Register.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, redirect, Routes } from "react-router-dom";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { NavLink } from "react-router-dom";
import {
  Flex,
  Heading,
  Box,
  SimpleGrid,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  HStack,
  Spacer,
  Button,
  VStack,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Field, Form, Formik } from "formik";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showUsernameError, setShowUsernameError] = useState(true);
  const [showEmailError, setShowEmailError] = useState(true);
  const [showPasswordError, setShowPasswordError] = useState(true);
  const error = "d-flex";
  const noErrorUsername = `d-flex margin ${showUsernameError ? "hidden" : ""}`;
  const noErrorEmail = `d-flex margin ${showEmailError ? "hidden" : ""}`;
  const noErrorPassword = `d-flex margin ${showPasswordError ? "hidden" : ""}`;

  const onRegisterHandler = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setShowPasswordError(false);
    } else {
      setShowPasswordError(true);
      const postObj = {
        name: username,
        email: email,
        password: password,
        re_password: repassword,
      };

      //  const headers=('Access-Control-Allow-Origin: *');
      // const headers={'Access-Control-Allow-Origin':'*'}
      console.log(postObj);
      axios
        .post("http://127.0.0.1:8000/auth/users/", postObj)
        .then((res) => {
          setUsername("");
          setEmail("");
          setPassword("");
          setRepassword("");
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });

      // axios.post('http://127.0.0.1:8000/api/register/',postObj).then((res)=>{
      //  if(res.status===200) navigate("/")
      // })
      // .catch((error) => {
      //   console.log(error)
      //   if (error.response.data.username) {
      //     // setShow(true);
      //     setShowUsernameError(false);
      //   }
      //   else{
      //     setShowUsernameError(true);
      //   }
      //   if(error.response.data.email){
      //     setShowEmailError(false);
      //   }
      //   else{
      //     setShowEmailError(true);
      //   }
      // });
    }
  };

  return (
    <>
      <Flex as="nav" bg="black" align="center" maxHeight="10vh">
        <Heading
          ms="3em"
          my="17px"
          fontSize="2xl"
          fontWeight="semilight"
          color="white"
        >
          Cab-Pool
        </Heading>
      </Flex>
      <Flex as="main" justify="center" align="center">
        <VStack>
          <Text fontSize={50} my={4} fontWeight={400}>
            Register for a ride!
          </Text>

          <Box
            height="xl"
            width="md"
            bg=""
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            rounded="md"
            m={3}
          >
            <form>
              <VStack gap={5}>
                <FormControl isRequired>
                  <FormLabel fontWeight="">Name</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<FaUser />}
                      mt={1}
                    />
                    <Input
                      placeholder="sasha"
                      type="text"
                      color="black"
                      size="lg"
                      width="xs"
                      _focus={{ borderColor: "blackAlpha.900" }}
                      _hover={{}}
                      bg="#eee"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdEmail />}
                      mt="5px"
                    />
                    <Input
                      placeholder="sasha@gmail.com"
                      type="email"
                      color="black"
                      size="lg"
                      width="xs"
                      _focus={{ borderColor: "blackAlpha.900" }}
                      _hover={{}}
                      bg="#eee"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<FaLock />}
                      mt="5px"
                    />
                    <Input
                      placeholder="Enter Password"
                      type="password"
                      color="black"
                      size="lg"
                      width="xs"
                      _focus={{ borderColor: "blackAlpha.900" }}
                      _hover={{}}
                      bg="#eee"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></Input>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<FaLock />}
                      mt="5px"
                    />
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      color="black"
                      size="lg"
                      width="xs"
                      _focus={{ borderColor: "blackAlpha.900" }}
                      _hover={{}}
                      bg="#eee"
                      value={repassword}
                      onChange={(e) => setRepassword(e.target.value)}
                    ></Input>
                  </InputGroup>
                </FormControl>
                <HStack>
                  <Button
                    type="submit"
                    size="lg"
                    width="xs"
                    fontWeight="semilight"
                    bg="blackAlpha.900"
                    color="white"
                    _hover={{ bg: "blackAlpha.800" }}
                    onClick={onRegisterHandler}
                  >
                    Register
                  </Button>
                </HStack>
                <Text>
                  Already a member?{" "}
                  <NavLink exact to="/" className="login-link">
                    Login
                  </NavLink>
                </Text>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Flex>
    </>
  );
};

export default Register;
