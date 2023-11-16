import React from 'react';
import style from './style.module.scss';

import Card from '../../components/Card/Card';

export default function Game() {
  console.log("тут будет слайдер")
  return (
    <section className={style.cont}>
      <Card />
    </section>

  )
}
