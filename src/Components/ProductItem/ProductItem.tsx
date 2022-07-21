import { FC } from "react";
import { IProduct } from "../../types/product";
import styles from './ProductItem.module.css'

interface PropsProductItem {
    product: IProduct
}

export const ProductItem : FC<PropsProductItem> = ({product}) => {
    return (
        <div>
            <img src={product.img} alt="" />
            <div>{product.name}</div>
            <div>{product.price}</div>
        </div>
    )
}