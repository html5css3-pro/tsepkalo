import React from 'react'
import style from './Bio.module.scss'
import {list} from './const'

const Bio = () => (
  <div className={style.bio}>
    <div className="container">
      <article className={style.bioInfo}>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </article>
    </div>
  </div>
)

export default Bio
