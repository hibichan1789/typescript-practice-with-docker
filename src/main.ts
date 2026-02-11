//main.ts

import type { Order, Category } from "./interface";

// 擬似API関数（1秒後にデータを返す）
const fetchOrders = (): Promise<Order[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, productName: "りんご", price: 150, category: "food" },
        { id: 2, productName: "スマホ", price: 80000, category: "electronics" },
        { id: 3, productName: "バナナ", price: 100, category: "food" },
        { id: 4, productName: "テレビ", price: 50000, category: "electronics" },
      ]);
    }, 1000);
  });
};
function extractOrderByCategory(orders:Order[], category:Category){
    return orders.filter(order=>order.category === category);
}
function sumPrice(orders:Order[]):number{
    return orders.reduce((sum, order)=>sum+order.price,0);
}
function renderPrice(price:number, unit:string="円"):void{
    const formattedPrice = price.toLocaleString();
    console.log(`${formattedPrice} ${unit}`);
}
async function main():Promise<void>{
    const orders = await fetchOrders();
    const foodOrders = extractOrderByCategory(orders, "electronics");
    const foodPrice = sumPrice(foodOrders);
    renderPrice(foodPrice);
}

await main();