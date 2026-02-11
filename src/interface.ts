//interface.ts
import {z} from "zod";

export const ResponseSchema = z.object({
    uid: z.string(),
    product_name: z.string(),
    price_jpy: z.number(),
    stock_count: z.number(),
    tags: z.array(z.string())
}).transform((data)=>({
    uid: data.uid,
    productName: data.product_name,
    priceJpy: data.price_jpy,
    stockCount: data.stock_count,
    tags: data.tags
}));
export type Schema = z.infer<typeof ResponseSchema>
export interface Display{
    id:string;
    displayName:string;
    taxIncludedPrice:number;
    stockCount:number;
    tags:string[];
}