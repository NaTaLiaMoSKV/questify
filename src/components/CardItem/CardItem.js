import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import css from './CardItem.module.css'

import AddCard from "components/AddCard/AddCard";
import { addUpdatingCard, completeCard } from "redux/card/cardOperations";
import { setIsEditingCard } from "redux/auth/authOperations";
import { selectAllCards, selectUpdatingCard } from "redux/card/cardSelectors";

import sprite from '../../images/symbol-defs.svg'
import { Card, CardTopContainer, CardCompletingContainer, CardCompletingText, CardCompletingButton, CardCompletingCancelButton, CardDifficulty, CardCompleteButton, CardTitle, CardDate, CardCategoryContainer, CardCategoryText, CardCompletingIcon } from "components/Cards/Cards.styled";
import { Tooltip } from "react-tooltip";

export default function CardItem({ card }) {
    const dispatch = useDispatch();

    const cards = useSelector(selectAllCards);
    const updatingCard = useSelector(selectUpdatingCard);

    const [completingCard, setCompletingCard] = useState(null);

    const isUpdating = updatingCard === card;
    const cardRef = useRef('');

    const formatDate = date => {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        if (date.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (date.toDateString() === tomorrow.toDateString()) {
            return 'Tomorrow';
        } else {
            return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
        }
    };

    const formatTitleString = str => {
        if (str.length <= 25) {
            return str + '...';
        }
        return str.substring(0, 22) + '...';
    }

    const onCardCompleteButtonClick = (e, cardId) => {
        const card = cards.find(card => card._id === cardId);
        setCompletingCard(card);
    }

    const onCardDoubleClick = (card) => {
        const allCards = document.querySelectorAll('.current');
        allCards.forEach(element => {
            element.classList.remove('current');
        });
        cardRef.current.classList.add('current');
        dispatch(setIsEditingCard(false)); 
        dispatch(addUpdatingCard(card));
    };

    const onContinueCompletingClick = (e, cardId) => {
        cardRef.current.classList.remove('current');
        dispatch(completeCard(cardId));
        handleMessage('Quest completed successfully');
    };

    const onCancelCompletingClick = e => {
        setCompletingCard(null);
        cardRef.current.classList.remove('current');
    };

    const handleMessage = (message) => {
        toast.success(message, {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 2000
        });
    };

    return (
        <Card ref={cardRef} onDoubleClick={() => onCardDoubleClick(card)} key={card._id} disabled={updatingCard !== null && card !== updatingCard} >
            {/* COMPLETING CARD */}
            {completingCard !== null && completingCard._id === card._id && (
                <>
                    <CardCompletingContainer>
                        <CardCompletingText>Completed:</CardCompletingText>
                        <CardCompletingCancelButton onClick={onCancelCompletingClick}>{formatTitleString(card.title)}</CardCompletingCancelButton>
                    </CardCompletingContainer>
                    
                    <svg width="145" height="123">
                        <use href={sprite + '#icon-award'}></use>
                    </svg>

                    <CardCompletingButton onClick={(e) => onContinueCompletingClick(e, card._id)}>Continue
                        <CardCompletingIcon>
                            <use href={sprite + '#icon-arrow-right'}></use>
                        </CardCompletingIcon>
                    </CardCompletingButton>
                </>
            )}

            {/* UPPDATING CARD */}
            {isUpdating && <AddCard />}

            {/* OTHER CARDS */}
            {!isUpdating && !completingCard && (
                <>
                    <CardTopContainer>
                            <CardDifficulty $text={card.difficulty}>{card.difficulty}</CardDifficulty>
                            {card.status === 'Complete' && (
                                <svg width="25" height="25">
                                    <use href={sprite + '#icon-star'}></use>
                                </svg>
                            )}
                            {card.status === 'Incomplete' && (
                                <>
                                    <CardCompleteButton data-tooltip-id="complete-tooltip" data-tooltip-content="Complete quest"  onClick={(e) => onCardCompleteButtonClick(e, card._id)}>
                                        <svg width="14" height="16">
                                            <use href={sprite + '#icon-star'}></use>
                                        </svg>
                                        <svg width="14" height="16">
                                            <use href={sprite + '#icon-star2'}></use>
                                        </svg>
                                    </CardCompleteButton>
                                    
                                    <Tooltip className={css.tooltip} id="complete-tooltip"></Tooltip>
                                </>
                            )}
                    </CardTopContainer>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDate>{formatDate(new Date(card.date))}, {card.time}</CardDate>
                    <CardCategoryContainer $text={card.category}>
                        <CardCategoryText>{card.category}</CardCategoryText>
                    </CardCategoryContainer>
                </>
            )}
        </Card>
    );
}
