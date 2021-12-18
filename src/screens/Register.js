import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import {
    Container,
    Flex,
    Heading,
    Stack,
    Alert,
    AlertIcon,
    Input,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';
import SimpleHeader from '../components/simpleHeader';
import TitleScreen from './TitleScreen';
import ErrorMessage from '../components/ErrorMessage';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [errMessage, setErrMessage] = useState("");
    const [error, setError] = useState(false);

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
        localStorage.setItem('userinfo', JSON.stringify(data));
        // setuInfo(localStorage.getItem('userinfo'));
        } catch (error) {
            console.log(error.response.data.message);
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

    function validatePw(props) {
        const passwordRegex = /(?=.*[0-9])/;
        let error
        console.log(props);

        // console.log(pwvalue);
        // console.log(pwvaluec);
        // if(!pwvalue) {
        //     error = 'Password is required!'
        //     return error
        // } else if (pwvalue.length < 7) {
        //     error = 'Password must be 7 characters long!';
        //     return error
        // } else if (!passwordRegex.test(pwvalue)) {
        //     error = "Password must contain one number!";
        //     return error
        // } else if (!(pwvalue === pwvaluec)){
        //     error = "Passwords does not match!";
        //     return error
        // }
    }

    return(
        <>
            <SimpleHeader />
            <TitleScreen title='Register'  />
            <Container>
                <Flex mt='5' boxShadow={'dark-lg'} flexDir={'column'} align={"center"} p='5' bg='#E59892'>
                    <Formik
                        initialValues={{ username: '', password: '', passwordc: ''}}
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
                                <Field name='password' validate={validatePw}>
                                    {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                                        <FormLabel htmlFor='password'>Password</FormLabel>
                                        <Input {...field} variant='solid' id='password' placeholder='password' />
                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>
                                <Field name='passwordc' validate={validatePw}>
                                    {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.passwordc && form.touched.passwordc}>
                                        <FormLabel htmlFor='passwordc'>Confirm password</FormLabel>
                                        <Input {...field} variant='solid' id='passwordc' placeholder='password' />
                                        <FormErrorMessage>{form.errors.passwordc}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>
                                <Button
                                    mt={4}
                                    colorScheme='teal'
                                    isLoading={props.isSubmitting}
                                    type='submit'
                                >
                                    Register
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Flex>
                {error ? (<ErrorMessage message={errMessage} />): null}
            </Container>
        </>
    )
}

export default Register