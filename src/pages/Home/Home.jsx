import React from 'react';
import style from './style.module.scss'

export default function Home() {
    return (
        <div className={style.cont}>
            <p>Привет, пользователь!</p>
            <p className={style.text}>Приступим к изучению иностранных слов..</p>
        </div>
    )
}