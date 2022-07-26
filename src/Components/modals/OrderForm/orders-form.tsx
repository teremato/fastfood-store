import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart, doOrder } from "../../../redux/action/addToCart";
import { useTypeSelector } from "../../../redux/hooks/useTypeSelector";
import styles from './orders-form.module.css'

interface PropMapOrderForm {
    orderSum: number,
    isActive: boolean,
    setIsActive: any
}

export const OrdersForm : FC<PropMapOrderForm> = ({ orderSum, isActive, setIsActive }) => {

    const dispatch = useDispatch()
    const cart = useTypeSelector(state => state.data.cart)
    const [userInput, setUserInput] = useState({
        city: ''.toLowerCase(),
        addres: ''.toLowerCase(),
        entrance: '',
        phone: ''
    })

    const makeOrders = () => {
        dispatch(doOrder({
            id: Date.now(),
            city: userInput.city,
            adress: userInput.addres,
            entrance: userInput.entrance,
            phone: userInput.phone,
            sum: orderSum,
            products: [...cart]
        }))
        setIsActive(false)
        dispatch(clearCart())
    }

    return (
        <div className={(isActive) ? `${styles.wrapper} ${styles.active}` : styles.wrapper}>
            <div className={styles.window}>
                <div onClick={() => setIsActive(false)} className={styles.closed_bar}>
                    <div className={styles.closed_btn}>Закрыть</div>
                </div>
                <div className={styles.container}>
                    <div className={styles.name_tag}>Заполните данные:</div>
                    <div className={styles.form}>
                        <div className={styles.tag}>Укажите город</div>
                        <input 
                        onChange={(e) => setUserInput({...userInput, city: e.currentTarget.value})}
                        placeholder="Пример: Санкт-Петербург"/>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.tag}>Укажите адрес</div>
                        <input 
                        onChange={(e) => setUserInput({...userInput, addres: e.currentTarget.value})}
                        placeholder="Пример: Красногвардейцев 7"/>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.tag}>Укажите квартиру</div>
                        <input 
                        onChange={(e) => setUserInput({...userInput, entrance: e.currentTarget.value})}
                        placeholder="Пример: 178"/>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.tag}>Укажите номер телефона</div>
                        <input 
                        onChange={(e) => setUserInput({...userInput, phone: e.currentTarget.value})}
                        placeholder="Пример: +79998885522"/>
                    </div>
                    <div className={styles.btn_container}>
                        <div className={styles.order_sum}>Итого: {orderSum}₽</div>
                        <button onClick={makeOrders}>Оплатить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}