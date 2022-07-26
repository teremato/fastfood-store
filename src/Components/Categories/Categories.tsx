import { FC } from "react"
import styles from './Categories.module.css'
import { NavLink as Link } from "react-router-dom"

export const Caterogies: FC = () => {
    return (
        <nav className={styles.nav}>
            <Link className={({ isActive }) => (isActive ? styles.active : "")} to="/categories/burgers" >Бургеры</Link>
            <Link className={({ isActive }) => (isActive ? styles.active : "")} to="/categories/snecks">Снеки</Link>
            <Link className={({ isActive }) => (isActive ? styles.active : "")} to="categories/drinks">Напитки</Link>
        </nav>
    )
}