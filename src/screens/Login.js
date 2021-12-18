import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
    Container,
    Flex,
    Heading,
    Input,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';
import SimpleHeader from '../components/simpleHeader';
import TitleScreen from './TitleScreen';


function Login(){

    function validateName(value) {
        let error
        if (!value) {
          error = 'Name is required'
        return error
      }
    }

    function validatePw(value) {
        let error
        if(!value) {
            error = 'Password is required'
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
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            actions.setSubmitting(false)
                            }, 1000)
                        }}
                        >
                        {(props) => (
                            <Form>
                                <Field name='name' validate={validateName}>
                                    {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel htmlFor='name'>Username</FormLabel>
                                        <Input {...field} variant='solid' id='name' placeholder='username' />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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
                                <Button
                                    mt={4}
                                    colorScheme='teal'
                                    isLoading={props.isSubmitting}
                                    type='submit'
                                >
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Flex>
            </Container>
        </>
    )
}

export default Login