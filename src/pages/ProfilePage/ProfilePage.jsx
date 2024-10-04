import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectorCurrentCard } from "../../assets/store/slices/cardsSlice";
import photo from "../../assets/files/avatar.png";
import { useForm } from "react-hook-form";

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

    const onSubmit = async (values) => {};
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
                        <div className="input_group">
                            <label>Имя</label>
                            <div className="input_field">
                                <input
                                    type="search"
                                    {...register("name")}
                                    placeholder="Имя"
                                    o
                                />
                                <svg
                                    className="icon-clear"
                                    viewBox="0 0 10 10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => {}}
                                >
                                    <path
                                        d="M9.06588 1.99469C9.35877 1.70179 9.35877 1.22692 9.06588 0.934025C8.77298 0.641132 8.29811 0.641132 8.00522 0.934025L5.00002 3.93922L1.99482 0.934026C1.70192 0.641133 1.22705 0.641132 0.934157 0.934026C0.641264 1.22692 0.641264 1.70179 0.934157 1.99469L3.93936 4.99989L0.934147 8.00509C0.641254 8.29799 0.641254 8.77286 0.934147 9.06575C1.22704 9.35865 1.70191 9.35865 1.99481 9.06575L5.00002 6.06054L8.00522 9.06575C8.29812 9.35865 8.77299 9.35865 9.06588 9.06575C9.35878 8.77286 9.35878 8.29799 9.06588 8.00509L6.06068 4.99989L9.06588 1.99469Z"
                                        fill="#595959"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div
                            className="input_group
                        "
                        >
                            <label>Никнейм</label>
                            <div className="input_field">
                                <input
                                    type="text"
                                    {...register("nick")}
                                    placeholder="Никнейм"
                                />
                                <svg
                                    className="icon-clear"
                                    viewBox="0 0 10 10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => {}}
                                >
                                    <path
                                        d="M9.06588 1.99469C9.35877 1.70179 9.35877 1.22692 9.06588 0.934025C8.77298 0.641132 8.29811 0.641132 8.00522 0.934025L5.00002 3.93922L1.99482 0.934026C1.70192 0.641133 1.22705 0.641132 0.934157 0.934026C0.641264 1.22692 0.641264 1.70179 0.934157 1.99469L3.93936 4.99989L0.934147 8.00509C0.641254 8.29799 0.641254 8.77286 0.934147 9.06575C1.22704 9.35865 1.70191 9.35865 1.99481 9.06575L5.00002 6.06054L8.00522 9.06575C8.29812 9.35865 8.77299 9.35865 9.06588 9.06575C9.35878 8.77286 9.35878 8.29799 9.06588 8.00509L6.06068 4.99989L9.06588 1.99469Z"
                                        fill="#595959"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div
                            className="input_group
                        "
                        >
                            <label>Почта</label>

                            <div className="input_field">
                                <input
                                    type="text"
                                    {...register("email")}
                                    placeholder="Почта"
                                />
                                <svg
                                    className="icon-clear"
                                    viewBox="0 0 10 10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => {}}
                                >
                                    <path
                                        d="M9.06588 1.99469C9.35877 1.70179 9.35877 1.22692 9.06588 0.934025C8.77298 0.641132 8.29811 0.641132 8.00522 0.934025L5.00002 3.93922L1.99482 0.934026C1.70192 0.641133 1.22705 0.641132 0.934157 0.934026C0.641264 1.22692 0.641264 1.70179 0.934157 1.99469L3.93936 4.99989L0.934147 8.00509C0.641254 8.29799 0.641254 8.77286 0.934147 9.06575C1.22704 9.35865 1.70191 9.35865 1.99481 9.06575L5.00002 6.06054L8.00522 9.06575C8.29812 9.35865 8.77299 9.35865 9.06588 9.06575C9.35878 8.77286 9.35878 8.29799 9.06588 8.00509L6.06068 4.99989L9.06588 1.99469Z"
                                        fill="#595959"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div
                            className="input_group
                        "
                        >
                            <label>Город</label>
                            <div className="input_field">
                                <input
                                    type="text"
                                    {...register("city")}
                                    placeholder="Город"
                                />

                                <svg
                                    className="icon-clear"
                                    viewBox="0 0 10 10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => {}}
                                >
                                    <path
                                        d="M9.06588 1.99469C9.35877 1.70179 9.35877 1.22692 9.06588 0.934025C8.77298 0.641132 8.29811 0.641132 8.00522 0.934025L5.00002 3.93922L1.99482 0.934026C1.70192 0.641133 1.22705 0.641132 0.934157 0.934026C0.641264 1.22692 0.641264 1.70179 0.934157 1.99469L3.93936 4.99989L0.934147 8.00509C0.641254 8.29799 0.641254 8.77286 0.934147 9.06575C1.22704 9.35865 1.70191 9.35865 1.99481 9.06575L5.00002 6.06054L8.00522 9.06575C8.29812 9.35865 8.77299 9.35865 9.06588 9.06575C9.35878 8.77286 9.35878 8.29799 9.06588 8.00509L6.06068 4.99989L9.06588 1.99469Z"
                                        fill="#595959"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div
                            className="input_group
                        "
                        >
                            <label>Телефон</label>

                            <div className="input_field">
                                <input
                                    type="text"
                                    {...register("phone")}
                                    placeholder="Телефон"
                                />
                                <svg
                                    className="icon-clear"
                                    viewBox="0 0 10 10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => {}}
                                >
                                    <path
                                        d="M9.06588 1.99469C9.35877 1.70179 9.35877 1.22692 9.06588 0.934025C8.77298 0.641132 8.29811 0.641132 8.00522 0.934025L5.00002 3.93922L1.99482 0.934026C1.70192 0.641133 1.22705 0.641132 0.934157 0.934026C0.641264 1.22692 0.641264 1.70179 0.934157 1.99469L3.93936 4.99989L0.934147 8.00509C0.641254 8.29799 0.641254 8.77286 0.934147 9.06575C1.22704 9.35865 1.70191 9.35865 1.99481 9.06575L5.00002 6.06054L8.00522 9.06575C8.29812 9.35865 8.77299 9.35865 9.06588 9.06575C9.35878 8.77286 9.35878 8.29799 9.06588 8.00509L6.06068 4.99989L9.06588 1.99469Z"
                                        fill="#595959"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div
                            className="input_group
                        "
                        >
                            <label>Название компании</label>

                            <div className="input_field">
                                <input
                                    type="text"
                                    {...register("company")}
                                    placeholder="Название компании"
                                />
                                <svg
                                    className="icon-clear"
                                    viewBox="0 0 10 10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => {}}
                                >
                                    <path
                                        d="M9.06588 1.99469C9.35877 1.70179 9.35877 1.22692 9.06588 0.934025C8.77298 0.641132 8.29811 0.641132 8.00522 0.934025L5.00002 3.93922L1.99482 0.934026C1.70192 0.641133 1.22705 0.641132 0.934157 0.934026C0.641264 1.22692 0.641264 1.70179 0.934157 1.99469L3.93936 4.99989L0.934147 8.00509C0.641254 8.29799 0.641254 8.77286 0.934147 9.06575C1.22704 9.35865 1.70191 9.35865 1.99481 9.06575L5.00002 6.06054L8.00522 9.06575C8.29812 9.35865 8.77299 9.35865 9.06588 9.06575C9.35878 8.77286 9.35878 8.29799 9.06588 8.00509L6.06068 4.99989L9.06588 1.99469Z"
                                        fill="#595959"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <button type="submit">Сохранить</button>
                </form>
            </div>
        </div>
    );
}
