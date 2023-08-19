import { useDispatch, useSelector } from "react-redux"
import { useRef, useState } from "react"
import 'react-datepicker/dist/react-datepicker.css';

import { CardTopContainer } from '../Cards/Cards.styled'
import { AddCardButton, ButtonsContainer, ButtonsSpan, CalendarPickerContainer, CalendarPickerInput, CalendarPickerText, CancelButton, CancelDeleteCardButton, CardDateContainer, CardSettingsContainer, CardTitleInput, CardTitleText, CardWrapper, CategoryDropdownContainer, CategoryDropdownText, DeleteCardButton, DeleteText, DeletingCardContainer, DropdownContainer, DropdownInput, DropdownItem, DropdownList, DropdownText, DropdownToggle, UpdateCardTitleInput } from "./AddCard.styled"
import css from '../CardItem/CardItem.module.css'

import starImage2 from '../../images/star2.svg'
import deleteImage from '../../images/delete.png'
import sprite from '../../images/symbol-defs.svg'

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { setIsEditingCard } from "redux/auth/authOperations";
import { addCard, addUpdatingCard, deleteCard, editCard } from "redux/card/cardOperations";
import { selectUpdatingCard } from "redux/card/cardSelectors";
import { Tooltip } from "react-tooltip";


export default function AddCard() {
    const updatingCard = useSelector(selectUpdatingCard);

    const dropdownTextRef = useRef('');
    const dropdownListRef = useRef(null);
    const dropdownItemsRef = useRef([]);
    const cardTitleInputRef = useRef('');
    
    const categoryDropdownTextRef = useRef('');
    const categoryDropdownListRef = useRef(null);
    const categoryDropdownItemsRef = useRef([]);

    const cardWrapperRef = useRef('');
    const cardUpdatedDate = useRef('');
    const cardUpdatedTime = useRef('');

    const dispatch = useDispatch();

    const today = new Date();

    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const [deletingCard, setDeletingCard] = useState(null);
    const [selectedDate, setSelectedDate] = useState(updatingCard ? updatingCard.date : today);
    const [titleInputValue, setTitleInputValue] = useState(updatingCard ? updatingCard.title : null);

    const handleDateChange = e => {
        const date = new Date(e.target.value);
        setSelectedDate(date);
        cardUpdatedDate.current.innerText = formatDate(date);
        cardUpdatedTime.current.innerText = `, ${formatTime(date)}`;
    };

    const handleInputChange = e => {
        setTitleInputValue(e.target.value);
    };

    const formatDate = date => {
        if (date.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (date.toDateString() === tomorrow.toDateString()) {
            return 'Tomorrow';
        } else {
            return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
        }
    };

    const formatTime = date => {
        const minutes = date.getMinutes();
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
        return `${date.getHours()}:${formattedMinutes}`;
    };

    const onDropdownClick = (e) => {
        dropdownListRef.current.classList.toggle('show');
        dropdownItemsRef.current.forEach(item => {
            if (item !== null && item.textContent === dropdownTextRef.current.innerText) {
                item.classList.add('active');
            }
        });
    };

    const onDropdownListClick = (e) => {
        if (e.target !== dropdownListRef.current) {
            dropdownTextRef.current.innerText = e.target.textContent;

            dropdownListRef.current.classList.remove('show');
            dropdownItemsRef.current.forEach(item => {
                if (item !== null) {
                    item.classList.remove('active');
                }
            });
        }
        
    };

    const onCategoryDropdownClick = (e) => {
        categoryDropdownListRef.current.classList.toggle('show');
        categoryDropdownItemsRef.current.forEach(item => {
            if (item !== null && item.textContent === categoryDropdownTextRef.current.innerText) {
                item.classList.add('active');
            }
        });
    };

    const onCategoryDropdownListClick = (e) => {
        if (e.target !== categoryDropdownListRef.current) {
            categoryDropdownTextRef.current.innerText = e.target.textContent;

            categoryDropdownListRef.current.classList.remove('show');
            categoryDropdownItemsRef.current.forEach(item => {
                if (item !== null) {
                    item.classList.remove('active');
                }
            });
        }
        
    };

    const onCancelButtonClick = (e) => {
        dispatch(setIsEditingCard(false));
    }

    const onAddCardButtonClick = (e) => {
        try {
            const newCard = getAllData();
            dispatch(addCard(newCard));
            dispatch(setIsEditingCard(false));
            setSelectedDate(today);
        } catch (error) {
            handleError(error.message);
        }
    }

    const onDeleteButtonClick = e => {
        setDeletingCard(updatingCard);
        cardWrapperRef.current.classList.add('deleting');
    }

    const onStopEditingButtonClick = e => {
        dispatch(addUpdatingCard(null));
    }

    const onSaveCardButtonClick = e => {
        
        try {
            const updatedData = getAllData();
            dispatch(editCard({ cardId: updatingCard._id, updatedData: updatedData }));
            dispatch(addUpdatingCard(null));
        } catch (error) {
            handleError(error.message);
        }
    }

    const onCancelDeletingButtonClick = e => {
        cardWrapperRef.current.classList.remove('deleting');
        setDeletingCard(null);
    };

    const onDeletingButtonClick = e => {
        cardWrapperRef.current.classList.remove('deleting');
        setDeletingCard(null);
        dispatch(deleteCard(updatingCard._id));
        dispatch(addUpdatingCard(null));
        handleMessage('Quest deleted successfully');
    };

    const getAllData = () => {
        const title = cardTitleInputRef.current.value;
        const date = selectedDate;
        const time = formatTime(new Date(selectedDate));
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

        if (title === '') {
            throw new Error('Title must not be empty');
        }

        if (date < today) {
            throw new Error('The selected date has already passed');
        }
        
        return newCard;
    }
    
    const handleError = (errorMessage) => {
        toast.error(errorMessage, {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 2000
        });
    };

    const handleMessage = (message) => {
        toast.success(message, {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 2000
        });
    };

    return (
        <>
            {/* DELETE CARD*/}
            {deletingCard && (
                <>
                    <DeletingCardContainer>
                        <DeleteText>Delete this Quest?</DeleteText>
                        <CancelDeleteCardButton onClick={onCancelDeletingButtonClick}>cancel</CancelDeleteCardButton>
                        <ButtonsSpan>|</ButtonsSpan>
                        <DeleteCardButton onClick={onDeletingButtonClick}>DELETE</DeleteCardButton>
                    </DeletingCardContainer>
                </>
            )}
            
            {/* EDIT CARD */}
            {updatingCard && (
                
                <CardWrapper ref={cardWrapperRef}>
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
                                <DropdownItem ref={el => dropdownItemsRef.current.push(el)} $text="Easy">Easy</DropdownItem>
                                <DropdownItem ref={el => dropdownItemsRef.current.push(el)} $text="Normal">Normal</DropdownItem>
                                <DropdownItem ref={el => dropdownItemsRef.current.push(el)} $text="Hard">Hard</DropdownItem>
                            </DropdownList>
                        </DropdownContainer>
                        <img src={starImage2} alt='star' />
                    </CardTopContainer>
                    <CardSettingsContainer>
                        <CardTitleText>EDIT QUEST</CardTitleText>
                        <UpdateCardTitleInput ref={cardTitleInputRef} type="text" value={titleInputValue} onChange={handleInputChange}></UpdateCardTitleInput>
                        <CardDateContainer>
                            <CalendarPickerContainer>
                                <CalendarPickerText ref={cardUpdatedDate}>{formatDate(new Date(updatingCard.date))}</CalendarPickerText>
                                <CalendarPickerText ref={cardUpdatedTime}>, {updatingCard.time}</CalendarPickerText>
                                <CalendarPickerInput
                                    type="datetime-local"
                                    step="900"
                                    defaultValue={`${new Date(updatingCard.date).toISOString().substr(0, 10)}T${updatingCard.time}`}
                                    onChange={handleDateChange}
                                    min={`${today.toISOString().split('.')[0]}`}
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
                        <CancelButton data-tooltip-id="delete-tooltip" data-tooltip-content="Delete" onClick={onDeleteButtonClick}>
                            <img src={deleteImage} alt="delete card" width={18} height={18}/>
                        </CancelButton>
                        <Tooltip className={css.tooltip} id="delete-tooltip" place="bottom"></Tooltip>
                        <ButtonsSpan>|</ButtonsSpan>
                        <CancelButton data-tooltip-id="cancel-editing-tooltip" data-tooltip-content="Close" onClick={onStopEditingButtonClick}>
                            <svg width="14" height="14">
                                <use href={sprite + '#icon-clear'}></use>
                            </svg>
                        </CancelButton>
                        <Tooltip className={css.tooltip} id="cancel-editing-tooltip" place="bottom"></Tooltip>
                        <ButtonsSpan>|</ButtonsSpan>
                        <CancelButton data-tooltip-id="save-editing-tooltip" data-tooltip-content="Save" onClick={onSaveCardButtonClick}>
                            <svg width="14" height="16">
                                <use href={sprite + '#icon-done'}></use>
                            </svg>
                        </CancelButton>
                        <Tooltip className={css.tooltip} id="save-editing-tooltip" place="bottom"></Tooltip>
                    </ButtonsContainer>
                </CardWrapper>
            )}

            {/* ADD CARD*/}
            {!updatingCard && (
                <CardWrapper>
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
                                <DropdownItem ref={el => dropdownItemsRef.current.push(el)} $text="Easy">Easy</DropdownItem>
                                <DropdownItem ref={el => dropdownItemsRef.current.push(el)} $text="Normal">Normal</DropdownItem>
                                <DropdownItem ref={el => dropdownItemsRef.current.push(el)} $text="Hard">Hard</DropdownItem>
                            </DropdownList>
                        </DropdownContainer>
                        <img src={starImage2} alt='star' />
                    </CardTopContainer>
                    <CardSettingsContainer>
                        <CardTitleText>Create New Quest</CardTitleText>
                        <CardTitleInput ref={cardTitleInputRef} type="text"></CardTitleInput>
                        <CardDateContainer>
                            <CalendarPickerContainer>
                                <CalendarPickerText ref={cardUpdatedDate}>{formatDate(selectedDate)}</CalendarPickerText>
                                <CalendarPickerText ref={cardUpdatedTime}>, {formatTime(selectedDate)}</CalendarPickerText>
                                <CalendarPickerInput
                                    type="datetime-local"
                                    step="900"
                                    defaultValue={`${new Date(selectedDate).toISOString().substr(0, 10)}T${formatTime(selectedDate)}`}
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
                        <CancelButton data-tooltip-id="cancel-tooltip" data-tooltip-content="Close"  onClick={onCancelButtonClick}>
                            <svg width="15" height="15">
                                <use href={sprite + '#icon-clear'}></use>
                            </svg>
                        </CancelButton>
                        <Tooltip className={css.tooltip} id="cancel-tooltip" place="bottom"></Tooltip>

                        <ButtonsSpan>|</ButtonsSpan>
                        <AddCardButton data-tooltip-id="add-tooltip" data-tooltip-content="Add quest" onClick={onAddCardButtonClick}>START</AddCardButton>
                        <Tooltip className={css.tooltip} id="add-tooltip" place="bottom"></Tooltip>

                    </ButtonsContainer>
                </CardWrapper>
            )}
            
        </>
    );
}