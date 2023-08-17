import { useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { selectAllCards } from "redux/card/cardSelectors";
import { CardsContainer, Card, CardContainerTitle } from "./Cards.styled";

import AddCard from "components/AddCard/AddCard";
import { selectIsEditingCard } from "redux/auth/authSelectors";
import CardItem from "components/CardItem/CardItem";

export default function Cards() {
    const cards = useSelector(selectAllCards);
    const isEditingCard = useSelector(selectIsEditingCard);

    const today = new Date();

    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);


    return (
        <>
            {/* EDITING CARD */}
            {isEditingCard && !cards.find(card => card.status === 'Incomplete' && new Date(card.date).toDateString() === today.toDateString()) && (
                <Card>
                    <AddCard />
                </Card>
            )}

            {/* TODAY CARDS */}
            {cards.find(card => card.status === 'Incomplete' && new Date(card.date).toDateString() === today.toDateString()) && (
                <>
                    
                    <CardContainerTitle>Today:</CardContainerTitle>
                        <CardsContainer>
                             {isEditingCard && (
                                <Card>
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
            
            {/* OTHER CARDS */}
            {cards.find(card => card.status === 'Incomplete' && new Date(card.date).toDateString() !== tomorrow.toDateString() && new Date(card.date).toDateString() !== today.toDateString()) && (
                <>
                    <CardContainerTitle>OTHER CARDS:</CardContainerTitle>
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