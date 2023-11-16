import React from 'react';
import style from './style.module.scss'

export default function Home() {
    return (
        <div className={style.cont}>
            <p>
                Привет, пользователь!<br />
                Приступим к изучению иностранных слов..
            </p>
        </div>
    )
}