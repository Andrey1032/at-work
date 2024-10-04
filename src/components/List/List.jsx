import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { selectorLoading } from "../../assets/store/slices/cardsSlice";
import Loader from "../Loader/Loader";

export default function List({ list_title, cards, type }) {
    const isLoading = useSelector(selectorLoading);

    return (
        <div className={type ? "list archive" : "list"}>
            <h1 className="list__title">{list_title}</h1>
            <hr className="sep-line" />
            {isLoading === "resolved" ? (
                <div className="list__cards ">
                    {cards?.map((card) => (
                        <Card card={card} type={type} key={card.id} />
                    ))}
                </div>
            ) : (
                !type && (
                    <Loader
                        type={"spinningBubbles"}
                        color={"hsla(223, 93%, 52%, 1)"}
                    ></Loader>
                )
            )}
        </div>
    );
}
