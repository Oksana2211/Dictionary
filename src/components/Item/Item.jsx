import React from "react"
// import { useState } from "react";
import style from './style.module.scss'

export default function Item(props) {

    const { english, transcription, russian, index, activeCards, setId } = props;

    const classItemActive = props.activeCards ? 'transcriptionActiv' : "transcription"
    const classButtonActive = props.activeCards ? 'buttonActiv' : "button"

    function transcriptionClose() {
        setId(index)
    }

    return (

        <section className={style.card}>
            <div><h2>{english}</h2></div>
            <div><h3>{transcription}</h3></div>
            <div><h3 className={`style.transcription ${style[classItemActive]}`}>{russian}</h3></div>
            <div><button className={style[classButtonActive]} onClick={transcriptionClose}>Проверить</button></div>
        </section>
    )
}
