import { FC } from "react"
import { Link } from "react-router-dom"
import { useTypeSelector } from "../../../redux/hooks/useTypeSelector"
import styles from './home.module.css'

export const Home: FC = () => {

    const cart = useTypeSelector(state => state.data.products)

    return (
        <div className={styles.container}>
            <div className={styles.title}>У нас - только лучшие</div>
            <div className={styles.main_frame}>
                <img src={cart[0].img} alt={cart[0].name} />
                <div className={styles.container}>
                    <div>
                        <div className={styles.name}>{cart[0].name}</div>
                        <div>{cart[0].description}</div>
                    </div>
                    <div>
                        <div className={styles.price}>Цена: {cart[0].price}Р.</div>
                        <div>
                            <Link to='/categories/burgers'>Перейти {">"}</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.left_frame}>
                <img className={styles.img} src={cart[1].img} alt={cart[1].name} />
                <div className={styles.info}>
                    <div>{cart[1].name}</div>
                    <div>{cart[1].price}</div>
                    <Link to='/categories/burgers'>Перейти {">"}</Link>
                </div>
            </div>
            <div className={styles.right_frame}>
                <img className={styles.img} src={cart[10].img} alt={cart[10].name} />
                <div className={styles.info}>
                    <div>{cart[10].name}</div>
                    <div>{cart[10].price}</div>
                    <Link to='/categories/snecks'>Перейти {">"}</Link>
                </div>
            </div>
            <div className={styles.last_frame}>
                <img className={styles.last_img} src={cart[13].img} alt={cart[13].name} />
                <div className={styles.lst_container}>
                    <div>
                        <div>{cart[13].name}</div>
                        <div>{cart[13].description}</div>
                    </div>
                    <div>
                        <div>Цена: {cart[13].price}Р.</div>
                        <Link to='/categories/drinks'>Перейти {">"}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}