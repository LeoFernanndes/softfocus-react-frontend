import { Link } from "react-router-dom";
import { FormContainer, SubmitButton } from "./styles";
import { useForm } from "./useForm";

import axios from "axios";

function LoginForm() {
    // defining the initial state for the form
    const initialState = {
        username: "",
        password: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        // send "values" to database
        const api = axios.create({
            baseURL: "http://44.195.238.80/api"
          });
        
        const response = await api.post('/token/', {...values})
        console.log(response.data)
        console.log(`loginUserCallback ${ JSON.stringify(values) }`)
    }

    return (
        <>
        <form onSubmit={onSubmit}>
        <FormContainer>
            <input
                name='username'
                id='username'
                type='text'
                placeholder='Email'
                onChange={onChange}
                required
                />

            <input
                name='password'
                id='password'
                type='password'
                placeholder='Password'
                onChange={onChange}
                required
                />
            <SubmitButton type='submit'>Login</SubmitButton>
        </FormContainer>
        </form>
        </>        
    );
}

export default LoginForm;