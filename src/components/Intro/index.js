import React from 'react'
import style from './Intro.module.scss'
import {list} from './const'

const socialNetworksLinks = [
  {
    link: 'https://www.facebook.com/tsepkalo',
    className: 'fa-facebook-f'
  },
  {
    link: 'https://www.instagram.com/tsepkalo.official',
    className: 'fa-instagram'
  },
  {
    link: 'https://www.youtube.com/channel/UCyNQ-QygZYwUgXSUQwFtzmQ',
    className: 'fa-youtube'
  },
  {
    link: 'https://t.me/tsepkalo2020',
    className: 'fa-telegram-plane'
  },
  {
    link: 'https://bit.ly/tsepkalo',
    className: 'fa-viber'
  },
  {
    link: 'https://ok.ru/valery.tsepkalovalerytsepkalo',
    className: 'fa-odnoklassniki'
  },
  {
    link: 'https://vk.com/id541230729',
    className: 'fa-vk'
  }
];

const Intro = () => (
  <div className={style.intro}>
    <div className="container">
      <div className={style.introInfo}>
        <figure>
          <img src="/assets/img/logo.svg" alt="Валерий Цепкало" />
          <figcaption>
            <div>{socialNetworksLinks.map(({link, className}) => (
                <a href={link} key={link} target="_blank" rel="noopener noreferrer">
                  <i className={`fab ${className}`} />
                </a>
            ))}
            </div>
            <span>Валерий <strong>Цепкало</strong></span>
          </figcaption>
        </figure>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <section className={style.introAction}>
        <ul>
          <li>
            <a href="https://yandex.by/maps/?ll=27.742426%2C53.795086&mode=usermaps&source=constructorLink&um=constructor%3A2959b3e53657fea294bad0c9157d7b0a366ff52d0b63369743a6a2f7492ddf1c&z=10" target="_blank" rel="noopener noreferrer">
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
          <li>
            <a href="http://tsepkalo.com/%D0%BE%D0%B1%D1%8A%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1-%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%B8-%D0%B2-%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%B0%D1%85-%D0%BF%D1%80%D0%B5%D0%B7%D0%B8/" target="_blank" rel="noopener noreferrer">
              <span><i className="fas fa-file-alt"></i></span>
              <p>Манифест</p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
)

export default Intro
