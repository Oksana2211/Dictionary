import React from "react"
import style from "./style.module.scss"
import Menu from "../Menu/Menu"

export default function Header() {
    return (
        <section className={style.cont}>
            <Menu />
        </section>
    )
}