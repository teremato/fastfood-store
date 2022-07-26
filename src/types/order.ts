import { IProduct } from "./product"

export interface IOrder {
    id: number,
    city: string,
    adress: string,
    entrance: string,
    phone: string,
    sum: number,
    products: Array<IProduct>
}