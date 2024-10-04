import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectorCurrentCard } from "../../assets/store/slices/cardsSlice";
import photo from "../../assets/files/avatar.png";
import { useForm } from "react-hook-form";
import InputField from "../../components/Input/Input";
import { USERS_ROUTE } from "../../utils/consts";
import PopUp from "../../components/PopUp/PopUp";

const InputFields = [
    {
        title: "Имя",
        value: "name",
    },
    {
        title: "Никнейм",
        value: "nick",
    },
    {
        title: "Почта",
        value: "email",
    },
    {
        title: "Город",
        value: "city",
    },
    {
        title: "Телефон",
        value: "phone",
    },
    {
        title: "Название компании",
        value: "company",
    },
];

const categories = [
    "Данные профиля",
    "Рабочее пространство",
    "Приватность",
    "Безопасность",
];

export default function ProfilePage() {
    const { cards_id, category } = useParams();
    const navigate = useNavigate();

    const card = useSelector(selectorCurrentCard);

    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            name: card?.username,
            nick: card?.name,
            email: card?.email,
            city: card?.address.city,
            phone: card?.phone,
            company: card?.company?.name,
        },
    });

    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setIsOpen(false), 4000);
        }
    }, [isOpen]);
    const onSubmit = async (values) => {
        console.log(values);
        for (var key in values) {
            if (values[key] === "")
                return alert("Проверьте форму на заполненность!");
        }
        setIsOpen(true);
    };

    return (
        <div className="profile__page">
            <button className="back" onClick={() => navigate("/users")}>
                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 9H0.75" />
                    <path d="M6 14.25L0.75 9L6 3.75" />
                </svg>
                <p className="back__title">Назад</p>
            </button>
            <div className="data">
                <div className="data__settings">
                    <img className="photo" src={photo} alt="фото" />
                    <div className="categories">
                        <Link
                            to={USERS_ROUTE + `/${cards_id}/${0}`}
                            className={
                                +category === 0 ? "category active" : "category"
                            }
                        >
                            Данные профиля
                        </Link>
                        <hr className="sep-line" />

                        <Link
                            to={USERS_ROUTE + `/${cards_id}/${1}`}
                            className={
                                +category === 1 ? "category active" : "category"
                            }
                        >
                            Рабочее пространство
                        </Link>
                        <hr className="sep-line" />
                        <Link
                            to={USERS_ROUTE + `/${cards_id}/${2}`}
                            className={
                                +category === 2 ? "category active" : "category"
                            }
                        >
                            Приватность
                        </Link>
                        <hr className="sep-line" />

                        <Link
                            to={USERS_ROUTE + `/${cards_id}/${3}`}
                            className={
                                +category === 3 ? "category active" : "category"
                            }
                        >
                            Безопасность
                        </Link>
                        <hr className="sep-line" />
                    </div>
                </div>
                <form
                    className="data__profile"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1>{categories[category]}</h1>
                    <hr className="sep-line" />
                    {+category === 0 && (
                        <>
                            <div className="inputs">
                                {InputFields?.map((inf) => (
                                    <InputField
                                        key={inf.title}
                                        label={inf.title}
                                        register={register(inf.value)}
                                        reset={() => setValue(inf.value, "")}
                                    ></InputField>
                                ))}
                            </div>
                            <button type="submit">Сохранить</button>
                        </>
                    )}
                </form>
            </div>
            {isOpen && <PopUp onChange={() => setIsOpen(false)} />}
        </div>
    );
}
