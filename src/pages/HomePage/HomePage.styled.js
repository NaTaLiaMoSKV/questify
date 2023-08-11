import { styled } from "styled-components";

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const CardsSection = styled.div`
    flex-grow: 1; 
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 0;
    width: calc(100% - 40px);
    
    @media screen and (min-width: 480px) {
        width: 440px;
    }

    @media screen and (min-width: 768px) {
        width: 704px;
    }

    @media screen and (min-width: 1200px) {
        width: 1168px;
    }

`

export const AddCardButton = styled.button`
    position: absolute;
    bottom: 30px;
    right: 0;
    width: 52px;
    height: 52px;
    background-color: #FF851C;
    border: none;
    border-radius: 50%;
    padding: 13px;
    cursor: pointer;
`

export const AddCardIcon = styled.svg`
    width: 25px;
    height: 25px;
`