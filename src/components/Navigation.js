import React, { useState } from 'react';
import styles from './Navi.module.scss';

function Navigation() {

    return (
        <div className={styles.navi}>
            <a className={styles.logo} href=""><img src={require("../assets/img/logo2a.png")} /></a>
            <ul className={styles.navi__buttons}>
                <li><a href=""><svg>
                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                    Szablony</a></li>
                <li><a href=""><svg data-template="templates/about.html">
                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>O nas</a></li>
                <li><a href=""><svg>
                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>Kontakt</a></li>
                <li className={styles.btn_buy}><a href="">Kup</a></li>
            </ul>
        </div>
    )
}

export default Navigation;