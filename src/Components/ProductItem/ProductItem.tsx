import { FC, useState } from "react";
import { IProduct } from "../../types/product";
import { ProductDefault } from "../modals/ProductDefault/product-default";
import styles from './ProductItem.module.css'

interface PropsProductItem {
    product: IProduct
}

export const ProductItem : FC<PropsProductItem> = ({product}) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className={styles.wrapper}>
            <img src={product.img} alt="" />
            <div className={styles.container}>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.order}>
                    <div className={styles.price}>{product.price} ₽</div>
                    <button onClick={() => setIsActive(true)}>Заказать</button>
                </div>
            </div>
            <ProductDefault
             product={product}
             isActive={isActive}
             setIsActive={setIsActive}
             />
        </div>
    )
}