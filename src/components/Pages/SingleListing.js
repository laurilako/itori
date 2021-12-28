import React, { useState, useEffect } from 'react'
import {
    Container,
    Flex,
    Input,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Message from '../../components/Message';
import TitleScreen from '../../screens/TitleScreen'

function SingleListing(props) {
    const navigate = useNavigate();
    const [errMessage, setErrMessage] = useState("");
    const [error, setError] = useState(false);
    const [succMessage, setSuccMessage] = useState("");
    const [succ, setSucc] = useState(false);  
    const [postId, setPostId] = useState()

    useEffect(() => {
        setID();
    })

    function setID() {
        if(props.id){
            setPostId(props.id)
        }
    }

    const update = async (props) => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            };
            await axios.put(
                `/api/listings/${postId}`,
                {
                    title: props.title,
                    content: props.content,
                },
                config
            )
            setSuccMessage("Post updated! Redirecting you to Tori...");
            setSucc(true);
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
                navigate('/home');
                }, 5000);                    
        }
    }

    function validateTitle(value) {
        let error;
        if (!value) {
            error = 'Title is required!';
          return error
        } else if (value.length < 3){
            error = "Title must be over 3 characters!"
            return error
        }
    }

    function validateContent(value) {
        let error;
        if (!value) {
            error = 'Content is required!';
          return error
        }
    }

    return(
        <>
            <TitleScreen title={"Update listing"} />
            <Container>
                <Flex mt='5' boxShadow={'dark-lg'} flexDir={'column'} align={"center"} p='5' bg='#E59892'>
                <Formik
                        initialValues={{ title: '', content: ''}}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                            update(values);
                            actions.setSubmitting(false)
                            }, 1000)
                        }}
                        >
                        {(props) => (
                            <Form>
                                <Field name='title' validate={validateTitle}>
                                    {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.title && form.touched.title}>
                                        <FormLabel htmlFor='title'>New title</FormLabel>
                                        <Input {...field} variant='solid' id='title' placeholder='type title here...' />
                                        <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>
                                <Field name='content' validate={validateContent} >
                                    {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.content && form.touched.content}>
                                        <FormLabel htmlFor='content'>New Content</FormLabel>
                                        <Input {...field} type='text' variant='solid' id='content' placeholder='type content here...' />
                                        <FormErrorMessage>{form.errors.content}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>
                                <Flex justify='center' flexDir={'column'} align={'center'}>
                                    <Button
                                        mt={4}
                                        colorScheme='teal'
                                        isLoading={props.isSubmitting}
                                        type='submit'>
                                        Update
                                    </Button>
                                    <Button
                                        as='a'
                                        href='/mylistings'
                                        mt={4}
                                        colorScheme='orange'>
                                        Cancel
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


export default SingleListing