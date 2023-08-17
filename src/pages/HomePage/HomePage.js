import { useDispatch } from "react-redux";

import Cards from "components/Cards/Cards";
import Header from "components/Header/Header";

import { setIsEditingCard } from "redux/auth/authOperations";
import { addUpdatingCard } from "redux/card/cardOperations";

import { AddCardButton, AddCardIcon, CardsSection, HomePageContainer } from "./HomePage.styled";
import css from '../../components/CardItem/CardItem.module.css'

import sprite from '../../images/symbol-defs.svg'
import { Tooltip } from "react-tooltip";

export default function HomePage() {
    const dispatch = useDispatch();

    const startEditing = () => {
        dispatch(setIsEditingCard(true)); 
        dispatch(addUpdatingCard(null));
    };
    
    return (
        <HomePageContainer>
            <Header />
            <CardsSection>
                <Cards />
            </CardsSection>
            <AddCardButton data-tooltip-id="add-quest-tooltip" data-tooltip-content="Add new quest" onClick={startEditing}>
                <AddCardIcon>
                    <use href={sprite + '#icon-plus'} />
                </AddCardIcon>
            </AddCardButton>
            <Tooltip className={css.tooltip} id="add-quest-tooltip" ></Tooltip>


        </HomePageContainer>
    )
}