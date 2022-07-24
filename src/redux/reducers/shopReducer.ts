import { Actions} from "../action/addToCart";
import {IAction} from '../../types/action'
import { IProduct } from "../../types/product";

interface IShopState {
    products: Array<IProduct>,
    cart: Array<IProduct>
}

const initState : IShopState = {
    products: [
        {id: 1, name: 'Ангус Пармезан', description: 'Такой сочный, ммм',
         img: 'https://qsr.kz/uploads/menuproducts/image/big_1628580583.png',
          category: 'burgers', price: 140, count: 1, size: 'S'},
        {id: 1, name: 'Гриль Кинг', description: 'Королевский, ммм',
         img: 'https://eda.yandex.ru/images/3490335/67c2165549f311c01f77d4d51443fef6-680x500.png',
          category: 'burgers', price: 150, count: 1, size: 'S'},
        {id: 1, name: 'Воппер', description: 'Такой воздушный, ммм',
         img: 'https://avatars.mds.yandex.net/i?id=cb260aeceefb1f36b41a238820fce6db-4010468-images-thumbs&ref=rim&n=33&w=225&h=225',
          category: 'burgers', price: 120, count: 1, size: 'S'},
        {id: 1, name: 'Гамбургер', description: 'Такой доступный и вкусный, ммм',
         img: 'https://avatars.mds.yandex.net/i?id=99c70a9ce84e822398a34322ea931b20-5235301-images-thumbs&ref=rim&n=33&w=225&h=225',
          category: 'burgers', price: 60, count: 1, size: 'S'},
        {id: 1, name: 'Чизбургер', description: 'Так много сыра и так доступно, ммм',
         img: 'https://burger-kingi.ru/images/menu-item/300/rodeo-gamburger.jpg',
          category: 'burgers', price: 65, count: 1, size: 'S'},
        {id: 1, name: 'Беконайзер', description: 'Так много мяса, и так жирно, ммм',
         img: 'https://vkus-eda-dostavka.ru/static/images/43822454173052471db32fedf75d0ede-600x450.jpg',
          category: 'burgers', price: 290, count: 1, size: 'S'},
        {id: 1, name: 'Наггетсы', description: 'Такие хрустящие..',
         img: 'https://avatars.mds.yandex.net/i?id=74f64eb6c1052f6d0ef5c608d3d9f658-5910641-images-thumbs&n=13',
          category: 'snecks', price: 30, count: 1, size: 'S'},
        {id: 1, name: 'Картошка-Фри', description: 'Как у бабушки...',
         img: 'https://ru.alcapone.ks.ua/upload/25e25495-2f4a-474c-9fa8-d3bab8d0a229/size-1/12779f31-7fd2-4877-98e8-ada700ac4ef1.jpg',
          category: 'snecks', price: 25, count: 1, size: 'S'},
        {id: 1, name: 'Луковые колечки', description: 'К пиву :)',
         img: 'https://st.depositphotos.com/1000374/2885/i/450/depositphotos_28850629-stock-photo-onion-rings.jpg',
          category: 'snecks', price: 20, count: 1, size: 'S'},
        {id: 1, name: 'Твистер', description: 'Взрыв из овощей с мясом',
         img: 'http://express-bulka.ru/image/cache/catalog/KFC/twister_de_lux-500x500.jpg',
          category: 'snecks', price: 40, count: 1, size: 'S'},
        {id: 1, name: 'Пирожок', description: 'Такой сладкий...',
         img: 'https://i5.stat01.com/2/4337/143368470/075a3e/site-800x800-pieraspcream-jpg.jpg',
          category: 'snecks', price: 25, count: 1, size: 'S'},
        {id: 1, name: 'Стрипсы', description: 'Такие острые!',
         img: 'https://mnogopizza.com/upload/gaufrette/6/e/e/6eef89bb00da3342558ba4f4f7708a628e14bb4f/no-name.png',
          category: 'snecks', price: 20, count: 1, size: 'S'},
        {id: 1, name: 'Кола', description: 'Освежает, как ни что другое',
        img: 'https://pizzaking96.ru/dir_images/catalogs_file1_19_l.jpg',
        category: 'drinks', price: 60, count: 1, size: 'S'
        },
        {id: 2, name: 'Пепси-Кола', description: 'Вкусно, как никогда'
        , img: 'https://продукты-для-вас.рф/uploads/images/items/338-pepsi-1-l-but.jpg',
            category: 'drinks', price: 58, count: 1, size: 'S'},
        {id: 3, name: 'Фанта', description: 'Апельсины, ммм :)',
            img: 'https://ne-polezno.ru/upload/iblock/144/14435cb5e8f24c02844fd472ae695693.jpg',
            category: 'drinks', price: 55, count: 1, size: 'S'},
        {id: 4, name: 'Спрайт', description: 'Бодрит, как никогда',
            img: 'https://dobryanka-rus.ru/storage/goods/189032_7QtH1.jpg',
            category: 'drinks', price: 55, count: 1, size: 'S'},
        {id: 5, name: 'Коффе', description: 'Помогает взбодриться :)',
            img: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614556301_72-p-chashka-kofe-na-belom-fone-92.jpg',
            category: 'drinks', price: 60, count: 1, size: 'S'},
        {id: 6, name: 'Чай', description: 'Поможет согреться',
            img: 'https://domstrousam.ru/wp-content/uploads/2021/02/chay_gorchit.jpg',
            category: 'drinks', price: 30, count: 1, size: 'S'},
    ],
    cart: []
}

export const shopReducer = (state = initState, action : IAction) : IShopState => {
    switch(action.type){
        case Actions.ADD_TO_CART:
            return {...state, cart: [...state.cart, action.payload]};
        default: return state
    }
}