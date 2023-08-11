import { styled } from "styled-components";

export const DropdownList = styled.ul`
    position: absolute;
    top: 30px;
    width: 90px;
    display: none;
    padding: 15px 20px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 3px 4px 4px 0px rgba(21, 57, 90, 0.05), -3px -4px 4px 0px rgba(21, 57, 90, 0.05);
    z-index: 100;

    &.show {
        display: block;
    }
` 

export const DropdownItem = styled.li`
    list-style-type: none;
    text-decoration: uppercase;
    position: relative;
    color: #B9C3C8;
    font-size: 16px;
    letter-spacing: 0.32px;
    transition: all 100ms linear;
    

    &:not(:last-child) {
        padding-bottom: 10px;
    }

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
        (props.text === 'Easy' || props.text === 'Normal' || props.text === 'Hard') &&
        `
        padding-left: 20px;

         &:not(:last-child) {
        padding-bottom: 8px;
    }

    `}

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

    &:hover,
    &:focus {
        color: #777;

        &::before {
            opacity: 1;
        }
    }


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

export const DropdownText = styled.p`
    position: relative;
    color: #B9C3C8;
    font-size: 16px;
    letter-spacing: 0.32px;
` 

export const DropdownToggle = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
` 

export const DropdownContainer = styled.div`
    position: relative;
`

export const DropdownInput = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

export const CardSettingsContainer = styled.div`
    margin-bottom: 50px;
`

export const CardTitleText = styled.p`
    color: #B9C3C8;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.24px;
    text-transform: uppercase;
    margin-bottom: 8px;
`

export const CardTitleInput = styled.input`
    width: 160px;
    padding: 0 15px 5px;

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
`
export const UpdateCardTitleInput = styled.input`
    margin-top: 10px;
    width: 160px;
    padding: 0 15px 5px;

    color: #282828;
    text-align: center;
    font-family: HelveticaNeueCyr;
    font-style: normal;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.32px;

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
`

export const CardDateContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const CardDateButton = styled.button`
    position: absolute;
    right: 5px;
    top: -3px;
    border: none;
    background-color: transparent;
    width: 20px;
    height: 20px;
    cursor: pointer;
    z-index: 90;
    pointer-events: none;

`

export const CardDateIcon = styled.svg`
    width: 20px;
    height: 20px;
`

export const CalendarPickerContainer = styled.div`
    position: relative;
    margin-top: 10px;
    display: flex;
    max-height: 250px;
`

export const CalendarPickerText = styled.p`
    color: #282828;
    font-size: 14px;
    letter-spacing: 0.28px;
`

export const CalendarPickerInput = styled.input`
    width: 20px;
    color: transparent;
    border: none;
    

    &::placeholder {
        color: #282828;
        font-family: 'Helvetica Neue Cyr', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.28px;
        opacity: 1;
    }

    &::-webkit-calendar-picker-indicator {
        cursor: pointer;
    }
`

export const CategoryDropdownContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    padding: 10px 20px;
    border-radius: 0px 25px 25px 0px;
    background: rgba(185, 195, 200, 0.3);
`

export const CategoryDropdownText = styled.p`
    position: relative;
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

export const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: right;

`

export const CancelButton = styled.button`
    cursor: pointer;
    width: 25px;
    height: 25px;
    border: none;
    background-color: transparent;
`

export const AddCardButton = styled.button`
    padding: 0;
    cursor: pointer;
    color: #00D7FF;
    text-align: right;
    font-family: 'Helvetica Neue Cyr', sans-serif;font-size: 14px;
    letter-spacing: 0.28px;
    border: none;
    background-color: transparent;
`

export const ButtonsSpan = styled.span`
    color: #B9C3C8;
    margin-left: 5px;
    margin-right: 8px;
`