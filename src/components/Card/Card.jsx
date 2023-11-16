import React from "react"
import Item from "../Item/Item"
import distionaryArr from '../data/dictionary.json'
import { useState } from "react";
import style from "./style.module.scss"


export default function Card() {

    const [id, setId] = useState(0)

    return (
        <div>
            {distionaryArr.map((item, index) => (
                < Item item={item} key={index} activeCards={item.id === id} setId={setId} />
            ))}
        </div>
    );
}


