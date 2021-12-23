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
import Header from '../Header'
import TitleScreen from '../../screens/TitleScreen'

function NewListing(props){
    const navigate = useNavigate();
    const [errMessage, setErrMessage] = useState("");
    const [error, setError] = useState(false);
    const [succMessage, setSuccMessage] = useState("");
    const [succ, setSucc] = useState(false); 
    const [file, setFile] = useState('');
    const [picurl, setPicurl] = useState('');
    const [user, setUser] = useState({});

    useEffect(() => {
        getUser();
    }, [])

    const getUser = () => {
        const local = JSON.parse(localStorage.getItem("userinfo"));
        setUser(local);
    }

    const handleImage = (e) => {
        setFile(e.target.files[0]);
    }

    const uploadImage = () => {
        const fd = new FormData();        
        const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/upload`
        const xhr = new XMLHttpRequest();

        fd.append(
            "upload_preset",
            process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
        fd.append("tags", "browser_upload");
        fd.append("file", file);
        xhr.open("POST", url, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        console.log("FD", fd);
        xhr.send(fd);

        xhr.onreadystatechange = (e) => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                console.log("res-sec-url", response.url);
                setPicurl(response.url)
            }
        }
    }

    const handleCreate = async (props) => {
        uploadImage();
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            };
            console.log(picurl);
            const { data } = await axios.post(
                "/api/listings/",
                {
                    title: props.title,
                    content: props.content,
                    pic: picurl,
                    userId: user._id
                },
                config
            );
            setSuccMessage("Post created! Redirecting you to Tori...");
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
                }, 5000);
        }
    }
    
    function validateTitle(value) {
        let error;
        if (!value) {
            error = 'Title is required!';
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
            <Header />
            <TitleScreen title={"Create new listing"} />
            <Container>
                <Flex mt='5' boxShadow={'dark-lg'} flexDir={'column'} align={"center"} p='5' bg='#E59892'>
                <Formik
                        initialValues={{ title: '', content: ''}}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                            console.log("values", values);
                            handleCreate(values);
                            actions.setSubmitting(false)
                            }, 1000)
                        }}
                        >
                        {(props) => (
                            <Form>
                                <Field name='title' validate={validateTitle}>
                                    {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.title && form.touched.title}>
                                        <FormLabel htmlFor='title'>Title</FormLabel>
                                        <Input {...field} variant='solid' id='title' placeholder='title' />
                                        <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>
                                <Field name='content' validate={validateContent} >
                                    {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.content && form.touched.content}>
                                        <FormLabel htmlFor='content'>Content</FormLabel>
                                        <Input {...field} type='text' variant='solid' id='content' placeholder='content' />
                                        <FormErrorMessage>{form.errors.content}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>
                                <Flex mt='4'>
                                    <Input type='file' accept={'image/*'} onChange={handleImage} />
                                </Flex>
                                <Flex justify='center' flexDir={'column'} align={'center'}>
                                    <Button
                                        mt={4}
                                        colorScheme='teal'
                                        isLoading={props.isSubmitting}
                                        type='submit'>
                                        Create
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

export default NewListing