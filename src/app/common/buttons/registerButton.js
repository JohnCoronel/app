import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    background: pink;
    height:35px;
    border-radius: 3px;
    border:none;
    margin: 0 .5em;
    width:80px;
    color:white;
`

const RegisterBtnLink = (props) => {
    return (
        <Link to= '/register'>
            <Button>
                Register
            </Button>
        </Link>
    )
}

export default RegisterBtnLink