import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import {
    Container,
    Flex,
    Text,
    Input,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
} from '@chakra-ui/react';
import SimpleHeader from '../components/simpleHeader';
import TitleScreen from './TitleScreen';
import Message from '../components/Message';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [errMessage, setErrMessage] = useState("");
    const [error, setError] = useState(false);
    const [succMessage, setSuccMessage] = useState("");
    const [succ, setSucc] = useState(false); 

    const handleRegister = async (props) => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            };
            const { data } = await axios.post(
                "/api/users/",
                {
                    name: props.username,
                    password: props.password,
                },
                config
            );
            setSuccMessage("Account created! Redirecting you to Tori...");
            setSucc(true);
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
                }, 5000);
        }
    }

    function validateName(namevalue) {
        let error;
        if (!namevalue) {
          error = 'Username is required!';
        return error
      }
    }

    function validatePw(pwvalue) {
        const passwordRegex = /(?=.*[0-9])/;
        let error;
        if(!pwvalue) {
            error = 'Password is required!';
            return error
        } else if (pwvalue.length < 7) {
            error = 'Password must be 7 characters long!';
            return error
        } else if (!passwordRegex.test(pwvalue)) {
            error = "Password must contain one number!";
            return error
        }
    }

    function validateConfirmPw(pass, value) {
        let error;
        if (pass && value) {
            if (pass !== value){
                error = "Passwords does not match!";
                return error
            }
        }
    }

    return(
        <>
            <SimpleHeader />
            <TitleScreen title='Register'  />
            <Container>
                <Flex mt='5' boxShadow={'dark-lg'} flexDir={'column'} align={"center"} p='5' bg='#E59892'>
                    <Formik
                        initialValues={{ username: '', password: '', confirmPassword: ''}}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                            handleRegister(values);
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
                                <Field type='password' name='password' validate={validatePw} >
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.password && form.touched.password}>
                                        <FormLabel htmlFor='password'>Password</FormLabel>
                                        <Input {...field} variant='solid' id='password' placeholder='password' />
                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>
                                <Field type='password' name='confirmPassword' validate={value => validateConfirmPw(props.values.password, value)}>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
                                        <FormLabel htmlFor='password'>Confirm Password</FormLabel>
                                        <Input {...field} variant='solid' id='password' placeholder='password' />
                                        <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>
                                <Flex justify='center' flexDir={'column'} align={'center'}>
                                    <Button
                                        mt={4}
                                        colorScheme='teal'
                                        isLoading={props.isSubmitting}
                                        type='submit'>
                                        Register
                                    </Button>
                                        <Text mt='4'>Already have an account?</Text>
                                    <Button
                                        ml='1'
                                        mt={4}
                                        colorScheme='blue'
                                        onClick={() => {
                                            navigate('/login');
                                        }}>
                                        Login
                                    </Button>
                                </Flex>
                            </Form>
                        )}
                    </Formik>
                </Flex>
                {error ? (<Message status='error' message={errMessage} />) : null}
                {succ ? (<Message status='success' message={succMessage} />) : null}
            </Container>
        </>
    )
}

export default Register