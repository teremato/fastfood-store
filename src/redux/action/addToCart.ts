import { IAction } from "../../types/action"
import { IProduct } from "../../types/product"


export enum Actions {
    ADD_TO_CART = 'ADD_TO_CART'
}

export const addToCart = (payload: IProduct) : IAction => {return {type: Actions.ADD_TO_CART, payload}}