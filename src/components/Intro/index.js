import React from 'react'
import style from './Intro.module.scss'
import {list} from './const'

const Intro = () => (
  <div className={style.intro}>
    <div className="container">
      <div className={style.introInfo}>
        <a href="/" title="Валерий Цепкало">
          <figure>
            <img src="/assets/img/logo.svg" alt="Валерий Цепкало" />
            <figcaption>Валерий <strong>Цепкало</strong></figcaption>
          </figure>
        </a>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <section className={style.introAction}>
        <ul>
          <li>
            <a href="/">
              <span><i className="fas fa-hand-peace"></i></span>
              <p>Поставить подпись</p>
            </a>
          </li>
          <li>
            <a href="/">
              <span><i className="fas fa-user-plus"></i></span>
              <p>Стать волонтером</p>
            </a>
          </li>
          <li>
            <a href="/">
              <span><i className="fas fa-users"></i></span>
              <p>Инициативная группа</p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
)

export default Intro
