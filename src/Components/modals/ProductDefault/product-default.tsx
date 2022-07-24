import { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { BurgersSize } from "../../../Constans/BurgersSize"
import { Category } from "../../../Constans/Category"
import { Operators } from "../../../Constans/Operators"
import { addToCart } from "../../../redux/action/addToCart"
import { IProduct } from "../../../types/product"
import styles from "./product-default.module.css"


interface PropsProductDefault {
    product: IProduct,
    setIsActive: any,
    isActive: boolean
}

export const ProductDefault : FC<PropsProductDefault> = ({product, setIsActive, isActive}) => {

    const dispatch = useDispatch()
    const [count, setCount] = useState(() => product.count)
    const [price, setPrice] = useState(() => product.price)
    const [size, setSize] = useState('S')

    useEffect(() => {
        setPrice((product.price + pricePerPrice[size]) * count)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[product.price, count, size])

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
        setSize('S')
    }
    const changeSize = (size: string) => { setSize(size) }

    const pricePerPrice : Record<string, number> = {
        [BurgersSize.SIZE_S] : 0,
        [BurgersSize.SIZE_M]: 50,
        [BurgersSize.SIZE_XL]: 70
    }

    const toCart = () => {
        dispatch(addToCart({...product, count: count, price: price, size: size}))
        closedMenu()
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
                            {(product.category === Category.BURGERS) ? 
                            <div className={styles.size_cntroller}>
                                <button 
                                className={(size === BurgersSize.SIZE_S) ? `${styles.size_btn} ${styles.btn_active}` : styles.size_btn}
                                onClick={() => changeSize(BurgersSize.SIZE_S)}>S</button>
                                <button 
                                className={(size === BurgersSize.SIZE_M) ? `${styles.size_btn} ${styles.btn_active}` : styles.size_btn}
                                onClick={() => changeSize(BurgersSize.SIZE_M)}>M</button>
                                <button 
                                className={(size === BurgersSize.SIZE_XL) ? `${styles.size_btn} ${styles.btn_active}` : styles.size_btn}
                                onClick={() => changeSize(BurgersSize.SIZE_XL)}>XL</button>
                            </div> : ''}
                            <div className={styles.count}>
                                <div>Цена: {price}₽</div>
                                <div className={styles.controller_count}>
                                    <button onClick={() => addCount(Operators.ADD)} className={styles.count_btn}>+</button>
                                    <div>{count}</div>
                                    <button onClick={() => addCount(Operators.SUBTRACT)} className={styles.count_btn}>-</button>
                                </div>
                            </div>
                            <button onClick={() => toCart()} className={styles.order_btn}>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}