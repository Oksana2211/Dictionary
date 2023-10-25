import React from "react"
// import { useState } from "react";
import style from './style.module.scss'



export default function WordList(props) {


    return (

        <section className={style.list}>
            <div>{props.item.english}</div>
            <div>{props.item.transcription}</div>
            <div>{props.item.russian}</div>
            <div>{"иконки"}</div>
        </section>
    )
}