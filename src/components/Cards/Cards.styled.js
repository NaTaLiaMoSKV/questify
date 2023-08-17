import { styled } from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 22px;

    @media screen and (min-width: 768px) {
        row-gap: 18px;
        column-gap: 16px;
    
    }

    @media screen and (min-width: 1200px) {
        
        justify-content: left;
    }
`

export const CardContainerTitle = styled.h1`
    color: #282828;
    text-transform: uppercase;
    margin-top: 30px;
    margin-bottom: 18px;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.3px;
`

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 280px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 3px 4px 4px 0px rgba(21, 57, 90, 0.03), -3px -4px 4px 0px rgba(21, 57, 90, 0.03);

    @media screen and (min-width: 768px) {
        width: 224px;
    }
`

export const CardTopContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 65px;

    @media screen and (min-width: 768px) {
        margin-bottom: 50px;
    }
`

export const CardDifficulty = styled.p`
    position: relative;
    padding-left: 20px;
    color: #B9C3C8;
    font-size: 16px;
    letter-spacing: 0.32px;

    &::before {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        left: 0;
        top: 4px;
        border-radius: 50%;
    }

    ${props =>
        props.text === 'Easy' &&
        `
        &::before {
            background-color: #00D7FF;
        }
    `}

    ${props =>
        props.text === 'Normal' &&
        `
        &::before {
            background-color: #24D40C;
        }
    `}

    ${props =>
        props.text === 'Hard' &&
        `
        &::before {
            background-color: #DB0837;
        }
    `}

    @media screen and (min-width: 768px) {
        font-size: 14px;
        letter-spacing: 0.28px;

        &::before {
            width: 8px;
            height: 8px;
            top: 3px;
        }
    }

`

export const CardCompleteButton = styled.button`
    border: none;
    background-color: transparent;
    width: 25px;
    height: 25px;
    
    padding: 0;
    cursor: pointer;
    
    transition: all 150ms linear;

    & svg {
        pointer-events: none;
        width: 23px;
        height: 23px;

    }

    &:hover svg:first-child,
    & svg:last-child {
        display: block;
    }

    &:hover svg:last-child,
    & svg:first-child {
        display: none;
    }

    &:hover {
        transform: scale(1.3)
    }
`

export const CardTitle = styled.p`
    color: #282828;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 14px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        margin-bottom: 12px;
    }
`

export const CardDate = styled.p`
    color: #B9C3C8;
    text-align: center;
    font-size: 18px;
    letter-spacing: 0.36px;
    margin-bottom: 90px;
    
    @media screen and (min-width: 768px) {
        font-size: 14px;
        letter-spacing: 0.28px;
        margin-bottom: 70px;
    }
`

export const CardCategoryContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    padding: 10px 20px;
    border-radius: 0px 25px 25px 0px;

    @media screen and (min-width: 768px) {
        padding: 8px 20px;
        border-radius: 0px 15px 15px 0px;
    }

    ${props =>
        props.text === 'Family' &&
        `
            background: #ffe6d3;
        `
    }
    ${props =>
        props.text === 'Work' &&
        `
            background: #ffb3b3;
        `
    }
    ${props =>
        props.text === 'Stuff' &&
        `
            background: #D3F6CE;
        `
    }
    ${props =>
        props.text === 'Health' &&
        `
            background: #CDF7FF;
        `
    }
    ${props =>
        props.text === 'Leisure' &&
        `
            background: #F8D2FF;
        `
    }
    ${props =>
        props.text === 'Learning' &&
        `
            background: #FFF6C0;
        `
    }
`

export const CardCategoryText = styled.p`
    color: #282828;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.28px;

    @media screen and (min-width: 768px) {
        color: #282828;
        font-size: 11px;
        letter-spacing: 0.22px;
    }
    
`

export const CardCompletingContainer = styled.div`
    display: flex;
    align-items: center;

`

export const CardCompletingText = styled.p`
    color: #000;
    font-size: 11px;
    text-transform: uppercase;
    margin-bottom: 15px;
`

export const CardCompletingButton = styled.button`
    margin-top: 15px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #B9C3C8;
    text-align: center;
    font-size: 12px;
    transition: all 150ms linear;

    &:hover {
        transform: scale(1.1)
    }
`

export const CardCompletingIcon = styled.svg`
    width: 9px;
    height: 7px;
    margin-left: 5px;
`

export const CardCompletingCancelButton = styled.button`
    color: #00D7FF;
    font-size: 12px;
    margin-left: 20px;
    margin-bottom: 15px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-bottom: 1px solid #00D7FF;
    transition: all 150ms linear;

    &:hover {
        transform: scale(1.1)
    }
`

