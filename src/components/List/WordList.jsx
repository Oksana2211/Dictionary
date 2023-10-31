import React from "react"
// import { useState } from "react";
import style from './style.module.scss'
import iconPencil from '../../img/pencil.png'
import iconBasket from '../../img/trash_сan.png'



export default function WordList(props) {


    return (

        <section className={style.list}>
            <div>{props.item.english}</div>
            <div>{props.item.transcription}</div>
            <div>{props.item.russian}</div>
            <div><button><img className={style.icon} src={iconPencil} alt="icon pensil" /></button>
                <button><img className={style.icon} src={iconBasket} alt="icon delete" /></button></div>
        </section>
    )
}