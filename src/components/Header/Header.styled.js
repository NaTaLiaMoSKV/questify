import { styled } from "styled-components";

export const HeaderSection = styled.div`
    width: 100vw;
    background-color: #242A37;
    box-shadow: 0px 4px 4px 0px rgba(36, 42, 55, 0.10);
`

export const HeaderContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    padding: 16px 20px;
    height: 60px;

    
    @media screen and (min-width: 480px) {
        width: 440px;
    }

    @media screen and (min-width: 768px) {
        width: 704px;
        padding: 16px 24px;
        height: 68px;
    }

    @media screen and (min-width: 1200px) {
        width: 1168px;
    }

`

export const HeaderLogo = styled.p`
    color: #00D7FF;
    font-size: 18px;
    letter-spacing: 0.36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media screen and (min-width: 768px) {
        font-size: 21px;
        letter-spacing: 0.42px;
    }
`
    
export const UserContainer = styled.div`
    display: none;
    align-items: center;
    gap: 12px;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`

export const UserAvatar = styled.div`

    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #3E4E6C;

    display: flex;
    justify-content: center;
    align-items: center;

`

export const LogoutUserAvatar = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #3E4E6C;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        display: none;
    }
`
export const UserFirstLetter = styled.p`
    color: #FFF;
    font-size: 17px;
    font-weight: 900;
`
export const UserText = styled.p`
    color: #7B8AA4;
    font-size: 17px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.34px;
`

export const LogoutContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media screen and (min-width: 768px) {
        gap: 40px;
    }
`
    
export const LogoutButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`
export const LogoutIcon = styled.svg`
    width: 35px;
    height: 35px;
    stroke: #3e4e6c;
    fill: #3e4e6c;
    transition: all 150ms linear;

    &:hover {
        stroke: #00D7FF;
        fill: #00D7FF;
    }
`
