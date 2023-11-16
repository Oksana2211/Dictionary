import React from 'react';
import style from './style.module.scss'

export default function Home() {
    return (
        <div className={style.cont}>
            <p>
                Хочешь выучить английский язык?<br />
                Начни тренировать слова прямо сейчас!
            </p>
        </div>
    )
}