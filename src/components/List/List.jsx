import React from "react"
import WordList from "./WordList";
// import { useState } from "react";
import style from "./style.module.scss"
import distionaryArr from '../../components/data/dictionary.json'



export default function List() {

    return (
        <div className={style.cont}>
            {distionaryArr.map((item, index) => (
                < WordList item={item} key={index} />
            ))}
        </div>
    );
}