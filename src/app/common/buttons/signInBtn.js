import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const SignIn = styled.button`
    background:transparent;
    border: 2px solid pink;
    border-radius:3px;
    color:pink;
    height:35px;
    width:80px;
`

const SignInBtn = () => {
    return (
        <Link to='/login'>
            <SignIn> Sign In </SignIn>
        </Link>
    )
}

export default SignInBtn;