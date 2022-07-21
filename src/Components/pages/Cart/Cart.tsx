import { FC } from "react"
import styles from './Cart.module.css'

export const Cart: FC = () => {
    return (
        <div className={styles.cart}>
            <div className={styles.container}>
                <div className={styles.title}>Корзина</div>
                <div className={styles.buy}>
                    <div>Стоимость: </div>
                    <button className={styles.btn}>Оплатить</button>
                </div>
            </div>
        </div>
    )
}