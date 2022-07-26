import { FC } from "react";
import { IOrder } from "../../types/order";
import styles from './order-item.module.css'

interface PropToOrderItem {
    order: IOrder
}

export const OrderItem: FC<PropToOrderItem> = ({order}) => {
    return (
        <div className={styles.order}>
            <div className={styles.order_info}>
                <div>Номер заказа: {order.id}</div>
                <div>Количество товаров: {order.products.length}</div>
                <div>Оплачено: {order.sum}</div>
            </div>
            <div className={styles.location}>
                <div>Город: {order.city}</div>
                <div>Улица: {order.adress}</div>
                <div>Квартира: {order.entrance}</div>
            </div>
        </div>
    )
}