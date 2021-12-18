import { 
    Stack,
    Alert,
    AlertIcon
} from '@chakra-ui/react';

function ErrorMessage(props){   
    return(
    <Stack p='5' spacing={3}>
        <Alert status='error'>
            <AlertIcon />
            {props.message}
        </Alert>
    </Stack>
    )
}

export default ErrorMessage;