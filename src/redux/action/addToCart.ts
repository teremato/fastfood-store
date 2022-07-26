import { IAction } from "../../types/action"
import { IOrder } from "../../types/order"
import { IProduct } from "../../types/product"


export enum Actions {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    DO_ORDER = 'DO_ORDER',
    CLEAR_CART = 'CLEAR_CART'
}

// Добавить в корзину
export const addToCart = (payload: IProduct) : IAction => {return {type: Actions.ADD_TO_CART, payload}}
// Удалить из корзины
export const removeFromCart = (payload: number) : IAction => {
    return {type: Actions.REMOVE_FROM_CART, payload}
}
// Сделать заказ
export const doOrder = (payload: IOrder) : IAction => {return {type: Actions.DO_ORDER, payload}}
// Очиститьь корзину после заказа
export const clearCart = () : IAction => {return {type: Actions.CLEAR_CART}}