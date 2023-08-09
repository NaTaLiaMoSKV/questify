import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import pic1 from '../../images/pic1.png'
import pic2 from '../../images/pic2.png'
import { Field, Form } from "formik";

export const WelcomeContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #f0f0f0;
    background-image: url(${pic1}), url(${pic2});
    background-position: top right, bottom right;
    background-size: auto 52%, auto 68%;
    background-repeat: no-repeat;
`;

export const WelcomeRegisterButton = styled(NavLink)`
    padding: 18px 30px;
    text-decoration: none;
    color: #ffffff;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.48px;

    border-radius: 18px;
    background: #FF851C;

    transition: all 150ms linear;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

`;

export const WelcomeForm = styled(Form)`
    position: absolute;
    bottom: 0;
    right: -110px;
    display: flex;
    align-items: center;
`

export const WelcomeFormField = styled(Field)`
    width: 148px;
    padding: 10px;
    background-color: transparent;
    color: #15395A;
    font-family: 'Helvetica Neue Cyr', sans-serif;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.48px;
    border: none;
    border-bottom: 2px solid #00D7FF;
    outline: none;
    transition: all 150ms ease;
    
    opacity: 0.4;

    &:hover,
    &:focus {
        opacity: 1;
        border-bottom: 3px solid #00D7FF;
    }
`

export const WelcomeFormButton = styled.button`
    position: relative;
    margin-left: 20px;
    width: 52px;
    height: 52px;
    background-color: #FF851C;
    border: none;
    border-radius: 50%;

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
        width: 52px;
        height: 52px;
        top: 0;
        left: 0;
        
        border-radius: 50%;
        background-color: #FF851C;
        filter: blur(4px);
        z-index: -1;
    }
    cursor: pointer;

`