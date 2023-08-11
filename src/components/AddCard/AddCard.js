import { useDispatch, useSelector } from "react-redux"
import { useRef, useState } from "react"
import 'react-datepicker/dist/react-datepicker.css';

import { CardTopContainer } from '../Cards/Cards.styled'
import { AddCardButton, ButtonsContainer, ButtonsSpan, CalendarPickerContainer, CalendarPickerInput, CalendarPickerText, CancelButton, CardDateContainer, CardSettingsContainer, CardTitleInput, CardTitleText, CategoryDropdownContainer, CategoryDropdownText, DropdownContainer, DropdownInput, DropdownItem, DropdownList, DropdownText, DropdownToggle, UpdateCardTitleInput } from "./AddCard.styled"

import starImage2 from '../../images/star2.svg'
import sprite from '../../images/symbol-defs.svg'

import { setIsEditingCard } from "redux/auth/authOperations";
import { addCard, addUpdatingCard } from "redux/card/cardOperations";
import { selectUpdatingCard } from "redux/card/cardSelectors";


export default function AddCard() {
    //  let updatingCard;
    //  useEffect(() => {
    //     if (editingCardId !== null) {
    //         const storedCards = localStorage.getItem('cards');
    //         const cards = JSON.parse(storedCards);
    //         updatingCard = cards.find(card => card._id === editingCardId);
    //         console.log(updatingCard)
    //         // setCardToUpdate(updatingCard);
    //     }
    
    // }, []);
    // const editingCardId = useSelector(selectEditingCardId);
    const updatingCard = useSelector(selectUpdatingCard);

    const dropdownTextRef = useRef('');
    const dropdownListRef = useRef(null);
    const dropdownItemsRef = useRef([]);
    const cardTitleInputRef = useRef('');
    
    const categoryDropdownTextRef = useRef('');
    const categoryDropdownListRef = useRef(null);
    const categoryDropdownItemsRef = useRef([]);

    const dispatch = useDispatch();

    const today = new Date();

    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const [selectedDate, setSelectedDate] = useState(today);
        const [titleInputValue, setTitleInputValue] = useState(updatingCard.title);

   
    // const [cardToUpdate, setCardToUpdate] = useState({});

    const onDropdownClick = (e) => {
        dropdownListRef.current.classList.toggle('show');
        dropdownItemsRef.current.forEach(item => {
            if (item.textContent === dropdownTextRef.current.innerText) {
                item.classList.add('active');
            }
        });
    };

    const onDropdownListClick = (e) => {
        if (e.target !== dropdownListRef.current) {
            dropdownTextRef.current.innerText = e.target.textContent;

            dropdownListRef.current.classList.remove('show');
            dropdownItemsRef.current.forEach(item => {
                item.classList.remove('active');
            });
        } 
        
    };

    const onCategoryDropdownClick = (e) => {
        categoryDropdownListRef.current.classList.toggle('show');
        categoryDropdownItemsRef.current.forEach(item => {
            if (item.textContent === categoryDropdownTextRef.current.innerText) {
                item.classList.add('active');
            }
        });
    };

    const onCategoryDropdownListClick = (e) => {
        if (e.target !== categoryDropdownListRef.current ) {
            categoryDropdownTextRef.current.innerText = e.target.textContent;

            categoryDropdownListRef.current.classList.remove('show');
            categoryDropdownItemsRef.current.forEach(item => {
                item.classList.remove('active');
            });
        } 
        
    };

    const handleDateChange = e => {
        setSelectedDate(e.target.value);
    };

    const handleInputChange = e => {
        setTitleInputValue(e.target.value);
        // console.log(e.target.value);
        // console.log(e);
        // e.target.textContent = e.target.value;
        // setInputValue(event.target.value);
    };

    const formattedDate = date => {
        if (date.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (date.toDateString() === tomorrow.toDateString()) {
            return 'Tomorrow';
        } else {
            return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
        }
    };

    const formattedTime = date => {
        const minutes = date.getMinutes();
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
        return `${date.getHours()}:${formattedMinutes}`;
    };

    const onCancelButtonClick = (e) => {
        dispatch(setIsEditingCard(false)); 
    }

    const onAddCardButton = (e) => {
        const title = cardTitleInputRef.current.value;
        const date = selectedDate;
        const time = formattedTime(new Date(selectedDate));
        const difficulty = dropdownTextRef.current.innerText;
        const categoryText = categoryDropdownTextRef.current.innerText.toUpperCase();
        const category = `${categoryText.charAt(0).toUpperCase() + categoryText.slice(1).toLowerCase()}`;
        const newCard = {
            title,
            difficulty,
            category,
            date,
            time,
            type: 'Task'
        };
        console.log(newCard);
        dispatch(addCard(newCard));
        dispatch(setIsEditingCard(false)); 
    }

    const onStopEditingButtonClick = e => {
        // dispatch(addEditingCardId(null));
        dispatch(addUpdatingCard(null));
        // setCardToUpdate(null);
    }

    const onSaveCardButtonClick = e => {
        console.log('need to save')
    }




    return (
        <>
            {/* EDIT */}
            {/* {updatingCard && console.log(updatingCard.title)} */}
            {updatingCard && (
                <>
                    <CardTopContainer>
                        <DropdownContainer>
                            <DropdownInput>
                                <DropdownText ref={dropdownTextRef}>{updatingCard.difficulty}</DropdownText>
                                <DropdownToggle onClick={onDropdownClick}>
                                    <svg width="16" height="8">
                                        <use href={sprite + '#icon-arrow-down'}></use>
                                    </svg>
                                </DropdownToggle>
                            </DropdownInput>
                            <DropdownList onClick={onDropdownListClick} ref={dropdownListRef}>
                                <DropdownItem ref={el => dropdownItemsRef.current.push(el)} text="Easy">Easy</DropdownItem>
                                <DropdownItem ref={el => dropdownItemsRef.current.push(el)} text="Normal">Normal</DropdownItem>
                                <DropdownItem ref={el => dropdownItemsRef.current.push(el)} text="Hard">Hard</DropdownItem>
                            </DropdownList>
                        </DropdownContainer>
                        <img src={starImage2} alt='star' />
                    </CardTopContainer>
                    <CardSettingsContainer>
                        <CardTitleText>EDIT QUEST</CardTitleText>
                        <UpdateCardTitleInput ref={cardTitleInputRef} type="text" value={titleInputValue} onChange={handleInputChange}></UpdateCardTitleInput>
                        <CardDateContainer>
                            <CalendarPickerContainer>
                                <CalendarPickerText>{formattedDate(new Date(updatingCard.date))}, {updatingCard.time}</CalendarPickerText>
                                <CalendarPickerInput
                                    type="datetime-local"
                                    step="900"
                                    value={updatingCard.date}
                                    onChange={handleDateChange}
                                    // min={`${selectedDate.toISOString().split('.')[0]}`}
                                />
                            </CalendarPickerContainer>
                        </CardDateContainer>
                    </CardSettingsContainer>
                    <CategoryDropdownContainer>
                        <DropdownContainer>
                            <DropdownInput>
                                <CategoryDropdownText ref={categoryDropdownTextRef}>{updatingCard.category}</CategoryDropdownText>
                                <DropdownToggle onClick={onCategoryDropdownClick}>
                                    <svg width="16" height="8">
                                        <use href={sprite + '#icon-arrow-down'}></use>
                                    </svg>
                                </DropdownToggle>
                            </DropdownInput>
                            <DropdownList onClick={onCategoryDropdownListClick} ref={categoryDropdownListRef}>
                                <DropdownItem ref={el => categoryDropdownItemsRef.current.push(el)}>Stuff</DropdownItem>
                                <DropdownItem ref={el => categoryDropdownItemsRef.current.push(el)}>Family</DropdownItem>
                                <DropdownItem ref={el => categoryDropdownItemsRef.current.push(el)}>Health</DropdownItem>
                                <DropdownItem ref={el => categoryDropdownItemsRef.current.push(el)}>Learning</DropdownItem>
                                <DropdownItem ref={el => categoryDropdownItemsRef.current.push(el)}>Leisure</DropdownItem>
                                <DropdownItem ref={el => categoryDropdownItemsRef.current.push(el)}>Work</DropdownItem>
                            </DropdownList>
                        </DropdownContainer>
                    </CategoryDropdownContainer>
                    <ButtonsContainer>
                        <CancelButton onClick={onStopEditingButtonClick}>
                            <svg width="15" height="15">
                                <use href={sprite + '#icon-clear'}></use>
                            </svg>
                        </CancelButton>
                        <ButtonsSpan>|</ButtonsSpan>
                        <AddCardButton onClick={onSaveCardButtonClick}>STOP</AddCardButton>
                    </ButtonsContainer>
                </>
            )}
            {/* ADD */}
            {!updatingCard && (
                <>
                    <CardTopContainer>
                        <DropdownContainer>
                            <DropdownInput>
                                <DropdownText ref={dropdownTextRef}>Easy</DropdownText>
                                <DropdownToggle onClick={onDropdownClick}>
                                    <svg width="16" height="8">
                                        <use href={sprite + '#icon-arrow-down'}></use>
                                    </svg>
                                </DropdownToggle>
                            </DropdownInput>
                            <DropdownList onClick={onDropdownListClick} ref={dropdownListRef}>
                                <DropdownItem ref={el => dropdownItemsRef.current.push(el)} text="Easy">Easy</DropdownItem>
                                <DropdownItem ref={el => dropdownItemsRef.current.push(el)} text="Normal">Normal</DropdownItem>
                                <DropdownItem ref={el => dropdownItemsRef.current.push(el)} text="Hard">Hard</DropdownItem>
                            </DropdownList>
                        </DropdownContainer>
                        <img src={starImage2} alt='star' />
                    </CardTopContainer>
                    <CardSettingsContainer>
                        <CardTitleText>Create New Quest</CardTitleText>
                        <CardTitleInput ref={cardTitleInputRef} type="text"></CardTitleInput>
                        <CardDateContainer>
                            <CalendarPickerContainer>
                                <CalendarPickerText>{formattedDate(new Date(selectedDate))}, {formattedTime(new Date(selectedDate))}</CalendarPickerText>
                                <CalendarPickerInput
                                    type="datetime-local"
                                    step="900"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    min={`${today.toISOString().split('.')[0]}`}
                                />
                            </CalendarPickerContainer>
                        </CardDateContainer>
                    </CardSettingsContainer>
                    <CategoryDropdownContainer>
                        <DropdownContainer>
                            <DropdownInput>
                                <CategoryDropdownText ref={categoryDropdownTextRef}>Stuff</CategoryDropdownText>
                                <DropdownToggle onClick={onCategoryDropdownClick}>
                                    <svg width="16" height="8">
                                        <use href={sprite + '#icon-arrow-down'}></use>
                                    </svg>
                                </DropdownToggle>
                            </DropdownInput>
                            <DropdownList onClick={onCategoryDropdownListClick} ref={categoryDropdownListRef}>
                                <DropdownItem ref={el => categoryDropdownItemsRef.current.push(el)}>Stuff</DropdownItem>
                                <DropdownItem ref={el => categoryDropdownItemsRef.current.push(el)}>Family</DropdownItem>
                                <DropdownItem ref={el => categoryDropdownItemsRef.current.push(el)}>Health</DropdownItem>
                                <DropdownItem ref={el => categoryDropdownItemsRef.current.push(el)}>Learning</DropdownItem>
                                <DropdownItem ref={el => categoryDropdownItemsRef.current.push(el)}>Leisure</DropdownItem>
                                <DropdownItem ref={el => categoryDropdownItemsRef.current.push(el)}>Work</DropdownItem>
                            </DropdownList>
                        </DropdownContainer>
                    </CategoryDropdownContainer>
                    <ButtonsContainer>
                        <CancelButton onClick={onCancelButtonClick}>
                            <svg width="15" height="15">
                                <use href={sprite + '#icon-clear'}></use>
                            </svg>
                        </CancelButton>
                        <ButtonsSpan>|</ButtonsSpan>
                        <AddCardButton onClick={onAddCardButton}>START</AddCardButton>
                    </ButtonsContainer>
                </>
            )}
            
        </>
    );
}