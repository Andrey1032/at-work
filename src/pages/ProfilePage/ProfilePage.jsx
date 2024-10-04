import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectorCurrentCard } from "../../assets/store/slices/cardsSlice";
import photo from "../../assets/files/avatar.png";
import { useForm } from "react-hook-form";
import InputField from "../../components/Input/Input";

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

export default function ProfilePage() {
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

    const onSubmit = async (values) => {
        console.log(values);
    };

    return (
        <div className="profile__page">
            <button className="back" onClick={() => navigate(-1)}>
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
                        <Link to={""} className="category active">
                            Данные профиля
                        </Link>
                        <hr className="sep-line" />
                        <Link to={""} className="category">
                            Рабочее пространство
                        </Link>
                        <hr className="sep-line" />
                        <Link to={""} className="category">
                            Приватность
                        </Link>
                        <hr className="sep-line" />
                        <Link to={""} className="category">
                            Безопасность
                        </Link>
                        <hr className="sep-line" />
                    </div>
                </div>
                <form
                    className="data__profile"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1>Данные профиля</h1>
                    <hr className="sep-line" />
                    <div className="inputs">
                        {InputFields?.map((inf) => (
                            <InputField
                                label={inf.title}
                                register={register(inf.value)}
                                reset={() => setValue(inf.value, null)}
                            ></InputField>
                        ))}
                    </div>
                    <button type="submit">Сохранить</button>
                </form>
            </div>
        </div>
    );
}
