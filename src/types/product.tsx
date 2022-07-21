export interface IProduct {
    name: string,
    description: string,
    img: string,
    category: string,
    price: number,
    count: number,
    size?:{
        S: false,
        M: false,
        XL: false
    }
}

