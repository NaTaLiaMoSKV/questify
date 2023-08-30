import { styled } from "styled-components";
import calendarImage from '../../images/calendar.svg'

export const CardWrapper = styled.div`
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.deleting {
        opacity: 0.3;
    }

`

export const DeletingCardContainer = styled.div`
    position: absolute;
    padding: 24px 30px 17px;
    top: 30%;
    opacity: 1;
    z-index: 800;
    border-radius: 10px;
    background: #E8E8E8;
    box-shadow: 3px 4px 4px 0px rgba(21, 57, 90, 0.03), -3px -4px 4px 0px rgba(21, 57, 90, 0.03);

`

export const CancelDeleteCardButton = styled.button`
    border:none;
    background-color: transparent;
    cursor: pointer;
    color: #24D40C;
    text-align: center;
    font-family: 'Helvetica Neue Cyr', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
`

export const DeleteText = styled.p`
    margin-bottom: 14px;
    color: #282828;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 550;
    line-height: normal;
`

export const DeleteCardButton = styled.button`
    border:none;
    background-color: transparent;
    cursor: pointer;
    color: #DB0938;
    text-align: center;
    font-family: 'Helvetica Neue Cyr', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
`

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
    transition: all 150ms linear;
    

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
        (props.$text === 'Easy' || props.$text === 'Normal' || props.$text === 'Hard') &&
        `
        padding-left: 20px;

         &:not(:last-child) {
        padding-bottom: 8px;
    }

    `}

    ${props =>
        props.$text === 'Easy' &&
        `
        &::before {
            background-color: #00D7FF;
        }
    `}

    ${props =>
        props.$text === 'Normal' &&
        `
        &::before {
            background-color: #24D40C;
        }
    `}

    ${props =>
        props.$text === 'Hard' &&
        `
        &::before {
            background-color: #DB0837;
        }
    `}
    ${props =>
        props.$text !== 'Easy' && props.$text !== 'Normal' && props.$text !== 'Hard' &&
        `
            text-transform: uppercase;
        `
    }

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

export const CardCompleteContainer = styled.div`
    width: 25px;
    height: 25px;
    
    padding: 0;
    
    transition: all 150ms linear;

    & svg {
        pointer-events: none;
        width: 23px;
        height: 23px;

    }

    &.completed svg:first-child,
    & svg:last-child {
        display: block;
    }

    &.completed svg:last-child,
    & svg:first-child {
        display: none;
    }


    &:hover  {
        transform: scale(1.2);
    }

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
    text-align: center;

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
    align-items: center;
    max-height: 250px;
`

export const CalendarPickerText = styled.p`
    color: #282828;
    font-size: 14px;
    letter-spacing: 0.28px;
`

export const CalendarPickerInput = styled.input`
    width: 18px;
    height: 20px;
    color: transparent;
    border: none;
    outline: none;
    background-color: transparent;
    position: relative;
    margin-left: 8px;
    cursor: pointer;

    &::-webkit-inner-spin-button,
    &::-webkit-calendar-picker-indicator {
        cursor: pointer;
        z-index: 600;
        opacity: 0;
    }
    
    &::after {
        pointer-event:none;
        position: absolute;
        width: 15px;
        height: 20px;
        background-color: #fff;
        background-image: url(${calendarImage});
        background-blend-mode: normal; 
        background-position: cover;
        background-size: 100% auto;
        background-repeat: no-repeat;
        content: '';
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
    align-items: center;

`

export const CancelButton = styled.button`
    cursor: pointer;
    width: 25px;
    height: 25px;
    padding: 0 5px;
    border: none;
    background-color: transparent;
`

export const AddCardButton = styled.button`
    margin-left: 3px;
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
    margin-right: 5px;
`