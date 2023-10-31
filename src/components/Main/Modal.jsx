import React, { useState } from "react"
import style from "./style.module.scss"



export default function Modal(active, setActive, ...props) {

    const classActive = active ? 'modal modalActive' : 'modal'

    console.log(classActive)

    return (
        <section >
            <div className={`${style[classActive]}`} onClick={() => setActive(false)}>

                <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                </div>

            </div>

        </section >

    )
}


