import React from 'react'
import styled from 'styled-components'
import {SearchSharp, ShoppingCartOutlined} from '@material-ui/icons'
import {Badge} from '@material-ui/core'
import { mobile } from '../responsive'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'

const Container = styled.div`
    height:60px;
    ${mobile({height:"50px"})}
`

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({paddig:"10px 0px"})}
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Language = styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile({display:'none'})}
`
const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display:flex;
    margin-left:25px;
    align-items:center;
    padding:5px;
`

const Input = styled.input`
    border:none;
    ${mobile({width:"50px"})}
`
const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize:"24px"})}
`

const Center = styled.div`
    flex:1;
    text-align:center;
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {

    const quantity = useSelector(state=>state.cart.quantity);
    
    console.log(quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchSharp style={{fontSize:16,color:'gray'}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/" className="link">
                        <Logo>Ben.</Logo>
                    </Link>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign Up</MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
