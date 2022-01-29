
export interface ICartState {
    items: ICartItem[]
}

export interface ICartItem {
    product: IProduct;
    quantity: number;
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
}