import React from "react"
import WordList from "./WordList";
// import { useState } from "react";
import style from "./style.module.scss"



export default function List(props) {
    // console.log(props);
    return (
        <div>
            {props.arr.map((item, index) => (
                < WordList item={item} key={index} />
            ))}
        </div>
    );
}