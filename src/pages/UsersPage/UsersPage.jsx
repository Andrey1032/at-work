import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchUsers,
    selectorCards,
} from "../../assets/store/slices/cardsSlice";
import List from "../../components/List/List";

export default function UsersPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers({ page: 1, limit: 6 }));
    }, [dispatch]);
    const cards = useSelector(selectorCards);
    return (
        <div className="users__page">
            <List list_title={"Активные"} cards={cards.active} type={0} />
            <List
                className="archive"
                list_title={"Архив"}
                cards={cards.archive}
                type={1}
            />
        </div>
    );
}
