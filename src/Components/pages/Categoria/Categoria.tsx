import { FC, useEffect } from "react"
import { useTypeSelector } from "../../../redux/hooks/useTypeSelector"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { ProductItem } from "../../ProductItem/ProductItem"
import { categoryTitle, visionMode,} from "./Categoria.utils"
import styles from './Categoria.module.css'


export const Categoria: FC = () => {
    // HOOKS
    const dispatch = useDispatch()
    const products = useTypeSelector(state => state.data.products)
    const view = useTypeSelector(state => state.vision.vision)
    const {tag} = useParams<string>();
    // Запуск при каждом запуске страницы ровно один раз
    useEffect(() => {
        visionMode(tag, dispatch)
    })

    return (
        <div className={styles.categoria}>
            <div className={styles.title}>{categoryTitle(tag)}</div>
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