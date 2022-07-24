import { FC } from "react";
import { Category } from "../../Constans/Category";
import { IProduct } from "../../types/product";
import styles from "./product-in-cart.module.css"

interface PropsToProductCart {
    product: IProduct
}

export const ProductInCart : FC<PropsToProductCart> = ({ product }) => {
    return (
        <div className={styles.wrapper}>
            <img src={product.img} alt={product.name} />
            <div className={styles.main_container}>
                <div className={styles.container}>
                    <div>
                        <div className={styles.name}>{product.name}</div>
                        <div>Количество: {product.count}</div>
                        { 
                        (product.category === Category.BURGERS) ? 
                        <div>Размер: {product.size}</div> : ' '
                        }
                    </div>
                    <button className={styles.btn_remove}>Удалить</button>
                </div>
                <div className={styles.price}>Цена: {product.price}₽</div>
            </div>
        </div>
    )
}