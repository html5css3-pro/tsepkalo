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
            <a href="https://yandex.by/maps/157/minsk/?ll=27.800976%2C53.913133&mode=usermaps&source=constructorLink&um=constructor%3A423edbdc5e55d0be632cb70b21d02d16989fadaad55ca7287578e398ccb3ad34&z=10" target="_blank" rel="noopener noreferrer">
              <span><i className="fas fa-hand-peace"></i></span>
              <p>Поставить подпись</p>
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfcmR1hjDQsorWHtliOMIaQHFB9Jrie0-t5aHs3LvvHY9uj8g/viewform" target="_blank" rel="noopener noreferrer">
              <span><i className="fas fa-user-plus"></i></span>
              <p>Стать волонтером</p>
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeskjggOvDNXFadzENmErZbepQ-edeBTSrjgwzU4LHEysHp6A/viewform" target="_blank" rel="noopener noreferrer">
              <span><i className="fas fa-question-circle"></i></span>
              <p>Задать вопрос</p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
)

export default Intro
