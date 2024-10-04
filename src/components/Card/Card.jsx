import React, { useRef, useState } from "react";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import img from "../../assets/files/avatar.png";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    activeCard,
    arhiveCard,
    currentCard,
} from "../../assets/store/slices/cardsSlice";

export default function Card({ card, type }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);
    useClickOutSide(modalRef, () => {
        isOpen && setTimeout(() => setIsOpen(false), 50);
    });
    const options = {
        activ: [
            {
                title: "Редактировать",
                func: () => {
                    dispatch(currentCard(card.id));
                    navigate(`${card.id}`);
                },
            },
            {
                title: "Архивировать",
                func: () => dispatch(arhiveCard(card.id)),
            },
            { title: "Скрыть", func: () => setIsOpen(false) },
        ],
        archive: [
            {
                title: "Активировать",
                func: () => dispatch(activeCard(card.id)),
            },
        ],
    };
    return (
        <div className="card">
            <img className="card__photo" src={img} alt="фото" />
            <div className="card__info">
                <div className="data">
                    <div className="username">
                        <p>{card.username}</p>
                        <button
                            className={
                                isOpen
                                    ? "icon-settings active"
                                    : "icon-settings"
                            }
                            onClick={() => setIsOpen((isOpen) => !isOpen)}
                        >
                            <svg
                                viewBox="0 0 4 16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12C0.9 12 0 12.9 0 14ZM0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2ZM0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6C0.9 6 0 6.9 0 8Z" />
                            </svg>
                        </button>
                    </div>

                    <p className="company">{card.company.name}</p>

                    {isOpen && (
                        <ModalWindow
                            modalRef={modalRef}
                            options={type ? options.archive : options.activ}
                            id={card.id}
                        />
                    )}
                </div>
                <p className="city">{card.address.city}</p>
            </div>
        </div>
    );
}
