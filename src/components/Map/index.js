import React from 'react';
import style from './Map.module.scss';

const Map = () => (
  <section className={style.map}>
    <h2>Карта пикетов:</h2>
    <div>
    <iframe
      title="yamap"
      src="https://yandex.by/map-widget/v1/-/CCQgUNgAKB"
      allowFullScreen
    ></iframe>
    </div>
  </section>
);

export default Map;
