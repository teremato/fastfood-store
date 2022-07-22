import { FC } from "react";
import { IProduct } from "../../types/product";
import styles from './ProductItem.module.css'

interface PropsProductItem {
    product: IProduct
}

export const ProductItem : FC<PropsProductItem> = ({product}) => {
    return (
        <div className={styles.wrapper}>
            <img src={product.img} alt="" />
            <div className={styles.container}>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.order}>
                    <div className={styles.price}>{product.price} ₽</div>
                    <button>Заказать</button>
                </div>
            </div>
        </div>
    )
}