// import { useDispatch, useSelector } from "react-redux"
// import 'react-datepicker/dist/react-datepicker.css';
// import { selectAllCards } from "redux/card/cardSelectors"
// // import css from './Cards.module.css'
// import { CardsContainer, Card, CardTopContainer, CardDifficulty, CardTitle, CardDate, CardCategoryContainer, CardCategoryText } from './Cards.styled'

// import starImage from '../../images/star.svg'
// import { selectIsEditingCard } from "redux/auth/authSelectors";
// import AddCard from "components/AddCard/AddCard";
// import { editCard } from "redux/card/cardOperations";
// import { useState } from "react";

// export default function Cards() {
//     const dispatch = useDispatch();
//     const cards = useSelector(selectAllCards);
//     const isEditingCard = useSelector(selectIsEditingCard);

//     const onEditingCard = (editingCard) => {
//         const cardId = editingCard._id;
//         const card = {
//             title: 'Wash bathroom'
//         }
//         const updatedCard = dispatch(editCard({ cardId, updatedData: card }))
//         console.log(updatedCard);
//     }

//     return (
//         <CardsContainer>
//             {isEditingCard && <AddCard />}
//             {cards !== undefined && cards.map(card => (
//                 <Card onDoubleClick={() => onEditingCard(card)} key={card._id}>
//                     <CardTopContainer>
//                         <CardDifficulty text={card.difficulty}>{card.difficulty}</CardDifficulty>
//                         <img src={starImage} alt='star' />
//                     </CardTopContainer>
//                     <CardTitle>{card.title}</CardTitle>
//                     <CardDate>{card.date}, {card.time}</CardDate>
//                     <CardCategoryContainer>
//                         <CardCategoryText>{card.category}</CardCategoryText>
//                     </CardCategoryContainer>
//                 </Card>
//             ))}
//         </CardsContainer>
           
//     )
// }

import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { selectAllCards, selectUpdatingCard, selectUpdatingCardId } from "redux/card/cardSelectors";
import { CardsContainer, Card, CardTopContainer, CardDifficulty, CardTitle, CardDate, CardCategoryContainer, CardCategoryText } from "./Cards.styled";

import starImage from "../../images/star.svg";
// import { selectIsEditingCard } from "redux/auth/authSelectors";
import AddCard from "components/AddCard/AddCard";
// import { selectEditingCardId} from "redux/card/cardSelectors";
// import { addEditingCardId } from "redux/card/cardOperations";
import { selectIsEditingCard } from "redux/auth/authSelectors";
import { addUpdatingCard } from "redux/card/cardOperations";
// import { editCard } from "redux/card/cardOperations";

export default function Cards() {
    const dispatch = useDispatch();
    const cards = useSelector(selectAllCards);

    const updatingCard = useSelector(selectUpdatingCard);
    const isEditingCard = useSelector(selectIsEditingCard)

    const onUpdatingCard = (card) => {
        // const storedCards = localStorage.getItem('cards');
        // const cards = JSON.parse(storedCards);
        // const cardToUpdate = cards.find(card => card._id === cardId);
        // // console.log(cardToUpdate);
        dispatch(addUpdatingCard(card));
        // console.log(updatingCard)
    };

    return (
        <CardsContainer>
            {isEditingCard &&
                <Card>
                    <AddCard />
                </Card>
            }

            {cards !== undefined &&
                cards.map((card) => (
                    <Card
                        onDoubleClick={() => onUpdatingCard(card)}
                        key={card._id}
                        disabled={updatingCard !== null && card !== updatingCard}
                    >
                        
                        { updatingCard !== card && (
                            <>
                                <CardTopContainer>
                                <CardDifficulty text={card.difficulty}>{card.difficulty}</CardDifficulty>
                                    <img src={starImage} alt="star" />
                                </CardTopContainer>
                                <CardTitle>{card.title}</CardTitle>
                                <CardDate>{card.date}, {card.time}</CardDate>
                                <CardCategoryContainer>
                                    <CardCategoryText>{card.category}</CardCategoryText>
                                </CardCategoryContainer>
                            </>
                        )}
                        
                        {updatingCard === card &&  <AddCard />}
                        {/* {updatingCard === card && console.log('this card need to update')} */}
                        {/* { (updatingCard && updatingCardId === card) && <AddCard />} */}
                    </Card>
                ))}
        </CardsContainer>
    );
}