import { IProduct } from "./product"

export interface IOrder {
    city: string,
    adress: string,
    entrance: string,
    phone: string,
    sum: number,
    products: Array<IProduct>
}