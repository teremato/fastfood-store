import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css'

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>La, APPETITO</div>
                <div className={styles.cart}>
                    <Link to="/cart">Корзина</Link>
                </div>
            </div>
        </header>
    )
}