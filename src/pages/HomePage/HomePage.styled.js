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

export const EmptyTextContainer = styled.div`
    position: relative;
    width: 300px;
    margin: 30px auto;
`

export const EmptyText = styled.p`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: 'Helvetica Neue Cyr';
    font-weight: 600;    
`

export const AddCardButton = styled.button`
    position: sticky;
    bottom: 10px;
    left: calc(100% - 70px);
    width: 52px;
    height: 52px;
    background-color: #FF851C;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 13px;
`

export const AddCardIcon = styled.svg`
    width: 25px;
    height: 25px;
`