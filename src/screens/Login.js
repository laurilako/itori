import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import {
    Container,
    Flex,
    Input,
    Button,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
} from '@chakra-ui/react';
import SimpleHeader from '../components/simpleHeader';
import TitleScreen from './TitleScreen';
import { useNavigate } from 'react-router-dom';
import Message from '../components/Message';


function Login(){
    let navigate = useNavigate();

    const [error, setError] = useState(false)
    const [errMessage, setErrMessage] = useState("");
    const [succMessage, setSuccMessage] = useState("");
    const [succ, setSucc] = useState(false); 

    useEffect(() => {
        const local = localStorage.getItem("userinfo");
        if (local) {
            setTimeout(() => {
                console.log("info", local);
                navigate('/home');
            }, 5000);
        }
    });

    const handleLogin = async (props) => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            };
            const { data } = await axios.post(
                "/api/users/login",
                {
                    name: props.username,
                    password: props.password,
                },
                config
            );
        setSuccMessage("Succesful authentication! Redirecting you to Tori...");
        setSucc(true);
        // setuInfo(localStorage.getItem('userinfo'));
        localStorage.setItem('userinfo', JSON.stringify(data));
        setTimeout(() => {
            setSucc(false);
            setSuccMessage("");
            navigate('/home');
            }, 5000);
        } catch (error) {
            setErrMessage(error.response.data.message);
            setError(true);
            setTimeout(() => {
                setError(false);
                setErrMessage("");
                }, 5000)
        }
    }

    function validateName(namevalue) {
        let error
        if (!namevalue) {
          error = 'Username is required!'
        return error
      }
    }

    function validatePw(pwvalue) {
        const passwordRegex = /(?=.*[0-9])/;
        let error
        if(!pwvalue) {
            error = 'Password is required!'
            return error
        } else if (pwvalue.length < 7) {
            error = 'Password must be 7 characters long!';
            return error
        } else if (!passwordRegex.test(pwvalue)) {
            error = "Password must contain one number!";
            return error
          }
    }
      
    return(
        <>
            <SimpleHeader />
            <TitleScreen title='Login'  />
            <Container>
                <Flex mt='5' boxShadow={'dark-lg'} flexDir={'column'} align={"center"} p='5' bg='#E59892'>
                    <Formik
                        initialValues={{ username: '', password: ''}}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                            handleLogin(values);
                            actions.setSubmitting(false)
                            }, 1000)
                        }}
                        >
                        {(props) => (
                            <Form>
                                <Field name='username' validate={validateName}>
                                    {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.username && form.touched.username}>
                                        <FormLabel htmlFor='username'>Username</FormLabel>
                                        <Input {...field} variant='solid' id='username' placeholder='username' />
                                        <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>
                                <Field name='password' validate={validatePw}>
                                    {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                                        <FormLabel htmlFor='password'>Password</FormLabel>
                                        <Input {...field} variant='solid' id='password' placeholder='password' />
                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>
                                <Flex justify='center' flexDir={'column'} align={'center'}>
                                    <Button
                                        mt={4}
                                        colorScheme='teal'
                                        isLoading={props.isSubmitting}
                                        type='submit'>
                                        Login
                                    </Button>
                                        <Text mt='4'>Haven't registered yet?</Text>
                                    <Button
                                        ml='1'
                                        mt={4}
                                        colorScheme='blue'
                                        onClick={() => {
                                            navigate('/register');
                                        }}>
                                        Register
                                    </Button>
                                </Flex>
                            </Form>
                        )}
                    </Formik>
                </Flex>
                {error ? (<Message status='error' message={errMessage} />): null}
                {succ ? (<Message status='success' message={succMessage} />): null}
            </Container>
        </>
    )
}

export default Login