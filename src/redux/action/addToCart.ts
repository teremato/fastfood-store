import { IAction } from "../../types/action"
import { IProduct } from "../../types/product"


export enum Actions {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART'
}

// Добавить в корзину
export const addToCart = (payload: IProduct) : IAction => {return {type: Actions.ADD_TO_CART, payload}}
// Удалить из корзины
export const removeFromCart = (payload: number) : IAction => {
    return {type: Actions.REMOVE_FROM_CART, payload}
}