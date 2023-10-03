import React from "react"
import Item from "../Item/Item"
import { useState } from "react";
import style from "./style.module.scss"


export default function Card(props) {

    console.log(props);
    // const [transcriptionOpen, setTranscriptionOpen] = useState(props.item.transcription);
    // // console.log(props.item.transcription);
    // function transcriptionClose() {

    //     setTranscriptionOpen("")
    // }

    return (
        <div>
            {props.arr.map((item, index) => (
                < Item item={item} key={index} />
            ))}
        </div>
    );
}
