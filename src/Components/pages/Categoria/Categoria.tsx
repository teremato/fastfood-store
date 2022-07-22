import { FC, useEffect } from "react"
import { useTypeSelector } from "../../../redux/hooks/useTypeSelector"
import { ProductItem } from "../../ProductItem/ProductItem"
import { useParams } from "react-router-dom"
import styles from './Categoria.module.css'
import store from "../../../redux"
import { changeMode } from "../../../redux/action/vision"


export const Categoria: FC = () => {
    //перечисление категорий
    const enum Category {
        BURGERS = 'burgers',
        SNACKS = 'snecks',
        DRINKS = 'drinks'
    }
    //hooks
    const products = useTypeSelector(state => state.data.products)
    const view = useTypeSelector(state => state.vision.vision)
    const {tag} = useParams();

    useEffect(() => {
        visionMode()
    },)

    const visionMode = () => {
        if(tag === Category.BURGERS) {store.dispatch(changeMode(Category.BURGERS))}
        else if(tag === Category.SNACKS) {store.dispatch(changeMode(Category.SNACKS))}
        else if(tag === Category.DRINKS) {store.dispatch(changeMode(Category.DRINKS))}
    }

    const categoryTitle = () : string => {
        if(tag === Category.BURGERS) {return 'Бургеры'}
        else if(tag === Category.SNACKS) {return 'Снеки'}
        else if(tag === Category.DRINKS) {return 'Напитки'}
        else return ''
    }

    console.log(view)
    return (
        <div className={styles.categoria}>
            <div className={styles.title}>{categoryTitle()}</div>
            <div className={styles.list}>
                {
                    products.filter((item) => item.category === view).map(item => {
                        return <ProductItem product={item}/>
                    })
                }
            </div>
        </div>
    )
}