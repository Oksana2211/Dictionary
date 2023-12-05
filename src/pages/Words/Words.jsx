import React, { useState } from "react"
import style from './style.module.scss'
import List from '../../components/List/List';
import iconSave from "../../img/save.png"
import Modal from '../../components/Main/Modal';

export default function Words() {

    const [modalActive, setModalActive] = useState(false)

    return (
        <section className={style.cont}>
            <List />

            {/* {modalActive && <Modal active={modalActive} setActive={setModalActive} />}

            <div className={style.conteunerButton}><button className={style.buttonSave} onClick={() => setModalActive(true)}>
                <img className={style.icon} src={iconSave} alt="icon save" />Новое слово</button></div> */}
        </section>
    )
}