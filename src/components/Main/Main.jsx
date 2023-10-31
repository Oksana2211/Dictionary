import React, { useState } from "react"
import Card from "../Card/Card";
import List from "../List/List"
import Modal from "./Modal";
import distionaryArr from '../data/dictionary.json'
import style from "./style.module.scss"
import iconSave from "../../img/save.png"

export default function Main() {
    const [modalActive, setModalActive] = useState(true)

    return (
        <section>
            <Card arr={distionaryArr} />
            <List arr={distionaryArr} />
            <div className={style.conteunerButton}><button className={style.buttonSave} onClick={() => setModalActive(true)}>
                <img className={style.icon} src={iconSave} alt="icon save" />Новое слово</button></div>
            <Modal active={modalActive} setActive={setModalActive} />
        </section>
    )
}