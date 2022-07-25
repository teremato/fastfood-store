import { FC, useEffect, useState } from "react"
import { useTypeSelector } from "../../../redux/hooks/useTypeSelector"
import { ProductInCart } from "../../ProductInCart/product-in-cart"
import styles from './Cart.module.css'

export const Cart: FC = () => {

    const cart = useTypeSelector(state => state.data.cart)

    return (
        <div className={(cart.length < 2 ? styles.cart : `${styles.cart} ${styles.cart_active}`)}>
            <div className={styles.container}>
                <div className={styles.title}>Корзина</div>
                <div className={styles.buy}>
                    <div>Стоимость: {(cart.length > 0) ? 
                    cart.map(item => item.price).reduce((total, item) => {return total + item}) : ''}₽</div>
                    <button className={styles.btn}>Оплатить</button>
                </div>
            </div>
            <div className={styles.list}>
            {
                cart.map((item) => {
                    return <ProductInCart product={item}/>
                })
            }
            </div>
        </div>
    )
}