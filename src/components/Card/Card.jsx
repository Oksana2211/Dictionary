import React from "react"
import Item from "../Item/Item"
import { useState } from "react";
import style from "./style.module.scss"


export default function Card(props) {

    // console.log(props);
    const [id, setId] = useState(0)

    return (
        <div>
            {props.arr.map((item, index) => (
                < Item item={item} key={index} activeCards={item.id === id} setId={setId} />
            ))}
        </div>
    );
}