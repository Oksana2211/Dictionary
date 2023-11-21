import React from 'react';
import style from './style.module.scss'
import ErrorImg from "../../img/Error.jpg"

export default function Error() {
  return (
    <img className={style.cont} src={ErrorImg} alt='Error' />
  )
}
