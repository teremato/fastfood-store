import { FC, useEffect, useState } from "react"
import { Operators } from "../../../Constans/Operators"
import { IProduct } from "../../../types/product"
import styles from "./product-default.module.css"


interface PropsProductDefault {
    product: IProduct,
    setIsActive: any,
    isActive: boolean
}

export const ProductDefault : FC<PropsProductDefault> = ({product, setIsActive, isActive}) => {

    const [count, setCount] = useState(() => product.count)
    const [price, setPrice] = useState(() => product.price)

    useEffect(() => {
        setPrice(product.price * count)
    },[product.price, count])

    const addCount = (sign: string) => {
        if(sign === Operators.ADD) {setCount(count + 1)}
        if(sign === Operators.SUBTRACT){
            if(count > 0) {setCount(count - 1)}
        }
    }
    const closedMenu = () => {
        setIsActive(false)
        setCount(() => product.count)
        setPrice(() => product.price)
    }

    return (
        <div className={isActive ? styles.wrapper + " " + styles.active : styles.wrapper}>
            <div className={styles.window}>
                <div className={styles.exiet}>
                    <button onClick={() => closedMenu()}>X</button>
                </div>
                <div className={styles.main_container}>
                    <img className={styles.img} src={product.img} alt={product.name} />
                    <div className={styles.info}>
                        <div className={styles.description_info}>
                            <div className={styles.name}>{product.name}</div>
                            <div className={styles.description}>{product.description}</div>
                        </div>
                        <div className={styles.controller}>
                            <div className={styles.count}>
                                <div>Цена: {price}₽</div>
                                <div className={styles.controller_count}>
                                    <button onClick={() => addCount(Operators.ADD)} className={styles.count_btn}>+</button>
                                    <div>{count}</div>
                                    <button onClick={() => addCount(Operators.SUBTRACT)} className={styles.count_btn}>-</button>
                                </div>
                            </div>
                            <button className={styles.order_btn}>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}