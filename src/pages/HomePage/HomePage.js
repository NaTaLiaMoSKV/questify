import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";

import Cards from "components/Cards/Cards";
import Header from "components/Header/Header";

import { setIsEditingCard } from "redux/auth/authOperations";
import { addUpdatingCard } from "redux/card/cardOperations";

import { AddCardButton, AddCardIcon, CardsSection, EmptyText, EmptyTextContainer, HomePageContainer } from "./HomePage.styled";
import css from '../../components/CardItem/CardItem.module.css'
import sprite from '../../images/symbol-defs.svg'

import { selectAllCards } from "redux/card/cardSelectors";
import { selectIsEditingCard } from "redux/auth/authSelectors";

export default function HomePage() {
    const dispatch = useDispatch();
    const cards = useSelector(selectAllCards);
    const isEditingCard = useSelector(selectIsEditingCard)

    const scrollButtonRef = useRef(null);

    const startEditing = () => {
        const scrollTarget = 0;
        const scrollDuration = 500;

        const easeInOutQuad = (t) => {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };

        const startScroll = window.scrollY;
        let startTime = null;

        function animateScroll(timestamp) {
            if (!startTime) startTime = timestamp;

            const progress = timestamp - startTime;
            const normalizedTime = Math.min(progress / scrollDuration, 1);
            const easedTime = easeInOutQuad(normalizedTime);
            const scrollDistance = easedTime * (scrollTarget - startScroll);
            const scrollTo = startScroll + scrollDistance;

            window.scrollTo(0, scrollTo);

            if (progress < scrollDuration) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);

        dispatch(setIsEditingCard(true)); 
        dispatch(addUpdatingCard(null));
    };
        
    
    return (
        <HomePageContainer>
            <Header />
            <CardsSection>
                <Cards />
                {cards.length === 0 && !isEditingCard && (
                    <EmptyTextContainer>
                        <EmptyText>Your quest list is empty. </EmptyText>
                        <svg>
                            <use href={sprite + '#icon-vector'} />
                        </svg>
                    </EmptyTextContainer>
                )}
            </CardsSection>
            <AddCardButton data-tooltip-id="add-quest-tooltip" data-tooltip-content="Add new quest" ref={scrollButtonRef} onClick={startEditing}>
                <AddCardIcon>
                    <use href={sprite + '#icon-plus'} />
                </AddCardIcon>
            </AddCardButton>
            <Tooltip className={css.tooltip} id="add-quest-tooltip" ></Tooltip>


        </HomePageContainer>
    )
}