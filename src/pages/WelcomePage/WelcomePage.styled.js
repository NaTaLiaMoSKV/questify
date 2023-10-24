import { styled } from "styled-components";

import desktopPic1 from '../../images/pic1.png'
import desktopPic2 from '../../images/pic2.png'
import mobilePic1 from '../../images/mobile-landing-pic1.png'
import mobilePic2 from '../../images/mobile-landing-pic2.png'
import { Field, Form } from "formik";

export const WelcomeContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #FFF;
    user-select: none;
    
    background-image: url(${mobilePic2}), url(${mobilePic1});
    background-color: rgba(255, 255, 255, 0.5);
    background-blend-mode: normal, lighten; 
    background-size: 70% auto, 130% auto;
    background-position: bottom right, bottom right;
    background-repeat: no-repeat;

    @media screen and (min-width: 768px) {
        background-image: url(${desktopPic1}), url(${desktopPic2});
        background-blend-mode: normal; 
        background-position: top right -180px, bottom right -180px;
        background-size: auto 52%, auto 68%;
    }

    @media screen and (min-width: 1200px) {
        background-position: top right, bottom right;
    }
`

export const WelcomeTextContainer = styled.div`
    width: calc(100% - 40px);
    padding: 0 20px;
    position: relative;

    @media screen and (min-width: 480px) {
        width: 375px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 768px) {
        margin-left: 50px;
        margin-right: 0;
    }

    @media screen and (min-width: 1200px) {
        padding: 0;
        margin-left: 230px;
        width: 562px;
    }

`

export const WelcomeTextSubtitle = styled.p`
    color: #00D7FF;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.48px;
    margin-bottom: 60px;

    @media screen and (min-width: 768px) and (max-width: 1199px) {
        margin-bottom: 40px;
    }
`

export const WelcomeTextTitle = styled.h1`
    color: #15395A;
    font-size: 18px;
    font-weight: 700;
    line-height: 29px; 
    letter-spacing: 0.36px;
    margin-bottom: 32px;

    @media screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 33px;
        letter-spacing: 0.48px;
    }

    @media screen and (min-width: 1200px) {
        color: #15395A;
        font-size: 32px;
        line-height: 45px; 
        letter-spacing: 0.72px;
        margin-bottom: 35px;
    }
`

export const WelcomeFormLabel = styled.p`
    margin: 0;
    color: #B9C3C8;
    font-size: 14px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: 0.28px;


    @media screen and (min-width: 768px) {
        font-size: 18px;
        letter-spacing: 0.36px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 20px;
        letter-spacing: 0.48px;
    }
`

export const WelcomeForm = styled(Form)`
    margin-top: 32px;
    display: flex;
    align-items: center;
    gap: 12px;

    @media screen and (min-width: 1200px) {
        position: absolute;
        bottom: 0;
        right: -140px;
        display: flex;
        align-items: center;
    }
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
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: #FF851C;
    border: none;
    border-radius: 50%;

    color: #FFF;
    text-align: center;
    font-family: 'Helvetica Neue Cyr', sans-serif;
    font-size: 22px;
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