import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css'

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/*">La, APPETITO</Link>
                </div>
                <div className={styles.cart}>
                    <Link to="/orders">Заказы</Link>
                    <Link to="/cart">Корзина</Link>
                </div>
            </div>
        </header>
    )
}