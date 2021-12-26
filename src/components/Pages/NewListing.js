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
    const [file, setFile] = useState();
    const [user, setUser] = useState({});

    useEffect(() => {
        getUser();
    }, [])

    const getUser = () => {
        const local = JSON.parse(localStorage.getItem("userinfo"));
        setUser(local);
    }

    const upload = async (props) => {
        let fd = new FormData();
        let url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/upload`
        fd.append(
            "upload_preset",
            process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
        fd.append("tags", "browser_upload");
        fd.append("file", file);

        axios
            .post(url, fd)
            .then((result) => {
                try {
                    const config = {
                        headers: {
                            "Content-type": "application/json"
                        }
                    };
                    axios.post(
                        "/api/listings/",
                        {
                            title: props.title,
                            content: props.content,
                            pic: result.data.url,
                            userId: user._id
                        },
                        config
                    )
                    .then(async () => {
                        const { data } = await axios.get(
                            `/api/users/${user._id}`
                        )
                        localStorage.setItem('userinfo', JSON.stringify(data));
                    })

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
                        navigate('/home');
                        }, 5000);                    
                }
            })
            .catch((err) => {
                setErrMessage("Picture file error, please select valid picture for your post!");
                setError(true);
                setTimeout(() => {
                    setError(false);
                    setErrMessage("");
                }, 5000)
            })
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
            <Header />
            <TitleScreen title={"Create new listing"} />
            <Container>
                <Flex mt='5' boxShadow={'dark-lg'} flexDir={'column'} align={"center"} p='5' bg='#E59892'>
                <Formik
                        initialValues={{ title: '', content: ''}}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                            upload(values);
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
                                <Flex flexDir={'column'} mt='1'>
                                    <FormLabel htmlFor='picture'>Picture</FormLabel>
                                    <Input type='file' accept={'image/*'} onChange={(e) => {setFile(e.target.files[0])
                                    }} />
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