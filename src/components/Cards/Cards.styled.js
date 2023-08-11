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
    background: #D3F6CE;

    @media screen and (min-width: 768px) {
        padding: 8px 20px;
        border-radius: 0px 15px 15px 0px;
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
