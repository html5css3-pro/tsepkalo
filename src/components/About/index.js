import React from 'react'
import style from './About.module.scss'
import {list} from './const'

const About = () => (
  <div className={style.about}>
    <div className="container">
      <section className={style.aboutInfo}>
        <ul>
          {list.map((item, index) => (
            <li key={index}><p><strong>{item[0]}</strong> {item[1]}</p></li>
          ))}
        </ul>
      </section>
    </div>
  </div>
)

export default About
