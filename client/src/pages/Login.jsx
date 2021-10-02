import React, { useState } from 'react'
import styled from "styled-components";
import { login } from '../redux/apiCalls';
import {mobile} from "../responsive";
import {useDispatch, useSelector} from 'react-redux';

const Container = styled.div`
    width:100vw;
    height:100vh;
    background:
    linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
    display:flex;
    align-items:center;
    background-size:cover;
    justify-content:center;
`
const Wrapper = styled.div`
    width:25%;
    padding:20px;
    ${mobile({ width: "75%" })}
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
`
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0;
    padding:10px;
`
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
    &:disabled{
        color:green;
        cursor:not-allowed;
    }
`

const Link = styled.a`
    margin:5px 0px;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
`

const Error = styled.span`
    color:red;
`

const Login = () => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const {isFetching,error} = useSelector(state => state.user )

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username,password})
    }

    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>
                    <Input 
                        placeholder="username" 
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <Input 
                        placeholder="password" 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleClick} disabled={isFetching} >
                        Login
                    </Button>
                    {error && <Error>Something went wrong...</Error> }
                    <Link>Do not you remember the password ?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
