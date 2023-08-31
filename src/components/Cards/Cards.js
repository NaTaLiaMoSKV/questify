import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";
import { CardsContainer, Card, CardContainerTitle } from "./Cards.styled";

import { selectAllCards } from "redux/card/cardSelectors";
import { selectIsEditingCard } from "redux/auth/authSelectors";
import { completeCard } from "redux/card/cardOperations";

import AddCard from "components/AddCard/AddCard";
import CardItem from "components/CardItem/CardItem";

export default function Cards() {
    const dispatch = useDispatch();
    const cards = useSelector(selectAllCards);
    const isEditingCard = useSelector(selectIsEditingCard);

    const allCards = document.querySelectorAll('.current');
    const today = useMemo(() => new Date(), []);
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    useEffect(() => {
        cards
            .filter(
                (card) =>
                card.status === "Incomplete" &&
                new Date(card.date) < today
            )
            .forEach((card) => {
                dispatch(completeCard(card._id));
            });
    }, [cards, today, dispatch]);   
    
    useEffect(() => {
        allCards
            .forEach(element => {
            element.classList.remove('current');
            });
    }, [allCards, dispatch]);    

    return (
        <>
            {/* ADD CARD */}
            {isEditingCard && !cards.find(card => card.status === 'Incomplete' && new Date(card.date).toDateString() === today.toDateString()) && (
                <CardsContainer>
                    <Card className="current">
                        <AddCard />
                    </Card>
                </CardsContainer>
            )}

            {/* TODAY CARDS */}
            {cards.find(card => card.status === 'Incomplete' && new Date(card.date).toDateString() === today.toDateString()) && (
                <>
                    <CardContainerTitle>Today:</CardContainerTitle>
                        <CardsContainer>
                             {isEditingCard && (
                                <Card className="current">
                                    <AddCard />
                                </Card>
                            )}

                            {cards !== undefined &&
                                cards
                                    .filter(card => card.status === 'Incomplete' && new Date(card.date).toDateString() === today.toDateString())
                                    .map(card => (
                                        <CardItem
                                            key={card._id}
                                            card={card}
                                        />
                                    ))
                            }
                    </CardsContainer>
                </>
            )}

            {/* TOMORROW CARDS */}
            {cards.find(card => card.status === 'Incomplete' && new Date(card.date).toDateString() === tomorrow.toDateString()) && (
                <>
                    <CardContainerTitle>Tomorrow:</CardContainerTitle>
                    <CardsContainer>
                        {cards !== undefined &&
                            cards
                                .filter(card => card.status === 'Incomplete' && new Date(card.date).toDateString() === tomorrow.toDateString()).map((card) => (                            
                                    <CardItem
                                        key={card._id}
                                        card={card}
                                    />
                                ))
                            }
                    </CardsContainer>
                </>
            )}
            
            {/* ALL CARDS */}
            {cards.find(card => card.status === 'Incomplete' && new Date(card.date).toDateString() !== tomorrow.toDateString() && new Date(card.date).toDateString() !== today.toDateString()) && (
                <>
                    <CardContainerTitle>All CARDS:</CardContainerTitle>
                    <CardsContainer>
                        {cards !== undefined &&
                            cards
                                .filter(card => card.status === 'Incomplete' && new Date(card.date).toDateString() !== tomorrow.toDateString() && new Date(card.date).toDateString() !== today.toDateString()).map((card) => (                            
                                    <CardItem
                                        key={card._id}
                                        card={card}
                                    />
                                ))
                        }
                    </CardsContainer>
                </>
            )}
            
            {/* CARDS DONE */}
            {cards.find(card => card.status === 'Complete') && (
                <>
                    <CardContainerTitle>Done:</CardContainerTitle>
                    <CardsContainer>
                        {cards !== undefined &&
                            cards
                                .filter(card => card.status === 'Complete').map((card) => (
                                <CardItem
                                        key={card._id}
                                        card={card}
                                    />
                                ))
                        }
                    </CardsContainer>
                </>
                
            )}
            
        
        </>
    );
}