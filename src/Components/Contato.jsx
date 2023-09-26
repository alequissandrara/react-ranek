import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/robots.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
        <Head title="Ranek | Contato" description="Entre em contato" />
        <img src={foto} alt="Foto dos rôbo" />
        <div>
            <h1>Entre em contato</h1>
            <ul className={styles.dados}>
                <li>email_teste@gmail.com</li>
                <li>(99) 9 9999-9999</li>
                <li>Rua ali perto, 99</li>
            </ul>
        </div>
    </section>
  )
}

export default Contato;