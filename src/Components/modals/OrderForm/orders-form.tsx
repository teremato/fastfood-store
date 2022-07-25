import { FC } from "react";


export const OrdersForm : FC = () => {
    return (
        <div>
            <div>
                <div>Закрыть</div>
            </div>
            <div>
                <div>Заполните данные:</div>
                <div>
                    <div>Укажите город</div>
                    <input placeholder="Пример: Санкт-Петербург"/>
                </div>
                <div>
                    <div>Укажите адрес</div>
                    <input placeholder="Пример: Красногвардейцев 7"/>
                </div>
                <div>
                    <div>Укажите подъезд и квартиру</div>
                    <input placeholder="Пример: подъезд 4, квартира 178"/>
                </div>
                <div>
                    <div>Укажите номер телефона</div>
                    <input placeholder="Пример: подъезд 4, квартира 178"/>
                </div>
                <div>Итого: </div>
                <button>Оплатить</button>
            </div>
        </div>
    )
}