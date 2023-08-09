import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';

export const AuthContainer = styled.div`
    margin-left:230px;
    display: block;
`

export const HelloText = styled.h2`
    color: #00D7FF;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.48px;
`

export const AuthFormWrapper = styled.div`
    position: relative;

    div {
        margin: 0;
        color: rgb(236, 68, 68);
        font-size: 14px;
    }
`;

export const AuthForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const ErrorSection = styled(ErrorMessage)``;

export const AuthFormField = styled(Field)`
    width: 350px;
    height: 49px;
    margin-bottom: 10px;
    margin-top: 30px;

    font-size: 14px;
    font-family: 'Helvetica Neue Cyr', sans-serif;
    letter-spacing: 0.48px;

    border: none;
    border-bottom: 2px solid #00D7FF;

    background: transparent;
    outline: none;
    transition: all 150ms ease;
    
    opacity: 0.4;

    &::placeholder {
        font-size: 14px;
        font-family: 'Helvetica Neue Cyr', sans-serif;
        letter-spacing: 0.48px;
    }

    &:hover,
    &:focus {
        opacity: 1;
        border-bottom: 3px solid #00D7FF;
    }
`;

export const AuthFormPasswordIcon = styled.span`
    width: 25px;
    position: absolute;
    top: 45px;
    right: 18px;
    color: #00D7FF;
    opacity: 0.4;
    cursor: pointer;
`;

export const AuthFormSubmitButton = styled.button`
    position: relative;
    margin-top: 10px;
    width: 180px;
    height: 50px;
    background-color: #FF851C;
    border-radius: 10px;
    border: none;

    color: #FFF;
    text-align: center;
    font-family: 'Helvetica Neue Cyr', sans-serif;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.48px;
    z-index: 10;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        
        border-radius: 10px;
        background-color: #FF851C;
        filter: blur(4px);
        z-index: -1;
    }

    transition: all 150ms linear;

    &:hover {
        opacity: 0.9;
    }

    cursor: pointer;
`;

export const AuthFormSubmitContainer = styled.div`
    display: flex;
    align-items: baseline;
    gap: 20px;
`
export const AuthFormSubmitNavLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 600;
    color: #171717;
    transition: all 150ms linear;

    &:hover {
        color: #15395A;
        transform: scale(1.05);
    }
`
