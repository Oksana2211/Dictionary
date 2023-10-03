import React from "react"
// import { useState } from "react";
import style from './style.module.scss'

export default function Item(props) {

    // console.log(props.item.transcription);
    return (

        <section className={style.card}>
            <div><h2>{props.item.english}</h2></div>
            <div><h3>{props.item.transcription}</h3></div>
            <div><h3>{props.item.russian}</h3></div>
            <div><button>Проверить</button></div>
        </section>

    )
}