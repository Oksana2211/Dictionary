import React, { useState } from 'react'
import Item from "../Item/Item"
import distionaryArr from '../data/dictionary.json'
import buttRight from '../../img/button_right_icon.png'
import buttLeft from '../../img/button_left_icon.png'
import style from "./style.module.scss"


export default function Card() {

    const [id, setId] = useState(0)


    const [words, setWord] = useState(distionaryArr);
    const [index, setIndex] = useState(0);
    const object = words[index];

    const handlNextItem = () => {
        console.log(words[index])
        setIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlPrevItem = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? words.length - 1 : prevIndex - 1
        );
    };

    // console.log(words)


    return (

        <section className={style.cont}>
            <button onClick={handlPrevItem} className={style.btn}><img className={style.icon} src={buttLeft} alt="Left" /></button>

            < Item english={object.english}
                transcription={object.transcription}
                russian={object.russian}
                index={object.id}
                key={object.id}
                activeCards={object.id === id} setId={setId} />

            <button onClick={handlNextItem} className={style.btn}><img className={style.icon} src={buttRight} alt="Right" /></button>
        </section>

    );
}


