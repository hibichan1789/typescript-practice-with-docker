//utils.ts

export function sumArray(numbers:number[]):number{
    return numbers.reduce((sum, num)=>sum+num, 0);
}

export function formatInput(value:string|number):string{
    if(typeof value === "string"){
        return value.trim();
    }
    return value.toFixed(2);
}

export function duplicate<T>(inputValue:T):T[]{
    return [inputValue, inputValue];
}