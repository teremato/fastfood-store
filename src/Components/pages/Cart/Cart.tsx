import { FC, useEffect, useState } from "react"
import { useTypeSelector } from "../../../redux/hooks/useTypeSelector"
import { OrdersForm } from "../../modals/OrderForm/orders-form"
import { ProductInCart } from "../../ProductInCart/product-in-cart"
import styles from './Cart.module.css'

export const Cart: FC = () => {

    const cart = useTypeSelector(state => state.data.cart)
    const [isActive, setIsActive] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice((cart.length > 0) ? cart.map(item => item.price).reduce((total, item) => {return total + item}) : 0)
    }, [cart])

    return (
        <div className={(cart.length < 2 ? styles.cart : `${styles.cart} ${styles.cart_active}`)}>
            <OrdersForm orderSum={totalPrice} isActive={isActive} setIsActive={setIsActive}/>
            <div className={styles.container}>
                <div className={styles.title}>Корзина</div>
                <div className={styles.buy}>
                    <div>Стоимость: {totalPrice}₽</div>
                    <button onClick={() => setIsActive(true)} className={styles.btn}>Оплатить</button>
                </div>
            </div>
            {(cart.length <= 0) ? <div style={{padding: '5px'}}>Здесь пока пусто, сначала добавьте вкусняшки!</div> : 
                <div className={styles.list}>
                {
                    cart.map((item) => {
                        return <ProductInCart product={item}/>
                    })
                }
                </div>
            }
        </div>
    )
}