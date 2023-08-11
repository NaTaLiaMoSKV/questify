import Cards from "components/Cards/Cards";
import Header from "components/Header/Header";
import { AddCardButton, AddCardIcon, CardsSection, HomePageContainer } from "./HomePage.styled";
import { useDispatch } from "react-redux";

import sprite from '../../images/symbol-defs.svg'
import { setIsEditingCard } from "redux/auth/authOperations";

export default function HomePage() {
    const dispatch = useDispatch();

    const startEditing = () => {
        dispatch(setIsEditingCard(true)); 
    };

    

    return (
        <HomePageContainer>
            <Header />
                
            <CardsSection>
                
                <Cards />
                <AddCardButton onClick={startEditing}>
                    <AddCardIcon>
                        <use href={sprite + '#icon-plus'} />
                    </AddCardIcon>
                </AddCardButton>
            </CardsSection>
        </HomePageContainer>
    )
}