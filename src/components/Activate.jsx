import React from "react";
import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Heading,
  Box,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'

const Activate = () => {
    const navigate=useNavigate();
    const {  id , token } = useParams();
    const toast = useToast();

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
            toast({
                title: 'Account Activated',
                description: "Now you can login",
                status: 'success',
                duration: 9000,
                position:'bottom-right',
                isClosable: true,
              })
            navigate('/')
        })
        .catch((error)=>{
            if(error.response.data.detail==="Stale token for given user."){
                toast({
                    title: 'Token Error',
                    description: "Expired Token",
                    status: 'error',
                    duration: 9000,
                    position:'bottom-right',
                    isClosable: true,
                  })
            }
        })
    }


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
            One Last Step!
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
           <Button
                    type="submit"
                    size="lg"
                    width="xs"
                    fontWeight="semilight"
                    bg="blackAlpha.900"
                    color="white"
                    _hover={{ bg: "blackAlpha.800" }}
                    onClick={tokenGenerator}
                  >
                    Verify
                  </Button>
          </Box>
        </VStack>
      </Flex>
        </>
    )
}

export default Activate