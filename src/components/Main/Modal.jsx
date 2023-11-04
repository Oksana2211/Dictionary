import React, { useState } from "react"
import style from "./style.module.scss"



export default function Modal(active, setActive, ...props) {

    // const classActive = active ? 'modalActive' : 'null'

    // console.log(classActive)

    return (
        <section >
            <div className={style.modal} onClick={() => setActive(false)}>

                <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                </div>

            </div>

        </section >

    )
}


