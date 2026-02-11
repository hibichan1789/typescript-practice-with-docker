//main.ts
import { Display, ResponseSchema} from "./interface";
import type { Schema } from "./interface";
const apiResponse = [
  {
    uid: "p-001",
    product_name: "MacBook Air",
    price_jpy: 120000,
    stock_count: 5,
    tags: ["new", "pc"]
  },
  {
    uid: "p-002",
    product_name: "iPhone 15",
    price_jpy: 100000,
    stock_count: 0,
    tags: ["sale", "smartphone"]
  },
  {
    uid: "p-003",
    product_name: "AirPods Pro",
    price_jpy: 35000,
    stock_count: 12,
    tags: ["sale", "limited"]
  }
];

const apiSchema:Schema[] = apiResponse.map(response=>{
    return ResponseSchema.parse(response);
});
const displayProduct:Display[] = apiSchema.map(schema=>{
    return {
        id:schema.uid,
        displayName: schema.productName,
        taxIncludedPrice: Math.floor(schema.priceJpy * 1.1),
        stockCount: schema.stockCount,
        tags: schema.tags
    };
});
console.log(apiSchema);
console.log(displayProduct);