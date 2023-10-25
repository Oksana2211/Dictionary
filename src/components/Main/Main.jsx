import React from "react"
import Card from "../Card/Card";
import List from "../List/List"
import distionaryArr from '../data/dictionary.json'
import style from "./style.module.scss"

export default function Main() {
    return (
        <section>
            <Card arr={distionaryArr} />
            <List arr={distionaryArr} />
        </section>
    )
}