//interface.ts
export type Order = {
    id: number;
    productName: string;
    price: number;
    category: Category;
}

export type Category = "food"|"electronics";