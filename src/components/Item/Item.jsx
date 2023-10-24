import React from "react"
// import { useState } from "react";
import style from './style.module.scss'

export default function Item(props) {

    const classItemActive = props.activeCards ? 'transcriptionActiv' : "transcription"

    function transcriptionClose() {
        props.setId(props.item.id)
    }

    // constructor(props)
    // {
    //     super(props);
    //     this.state = {
    //         pressed: false
    //     };
    // };

    return (

        <section className={style.card}>
            <div><h2>{props.item.english}</h2></div>
            <div><h3>{props.item.transcription}</h3></div>
            <div><h3 className={`style.transcription ${style[classItemActive]}`}>{props.item.russian}</h3></div>
            <div><button onClick={transcriptionClose}>Проверить</button></div>
        </section>

    )
}