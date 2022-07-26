import { FC } from "react";
import { useTypeSelector } from "../../../redux/hooks/useTypeSelector";
import { OrderItem } from "../../OrderItem/order-item";
import styles from './orders.module.css'

export const Orders: FC = () => {

    const orders = useTypeSelector(state => state.data.orders)

    return (
        <div className={(orders.length > 5) ? `${styles.orders} ${styles.active}` : styles.orders}>
            <div className={styles.title}>Заказов: {orders.length}</div>
            <div className={styles.list}>
                {
                    orders.map((item) => {
                        return <OrderItem order={item}/>
                    })
                }
            </div>
        </div>
    )
}