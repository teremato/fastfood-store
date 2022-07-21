import { FC } from "react";
import styles from './Description.module.css'

export const Description : FC = () => {
    return (
        <div className={styles.main}>
            Проект написан на: REACT, REACT-ROUTER-DOM, REDUX, REACT-REDUX, TYPESCRIPT
        </div>
    )
}