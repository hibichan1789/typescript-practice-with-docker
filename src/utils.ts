//utils.ts
import { ApiResponse } from "./interface";

export function handleResponse(response:ApiResponse):string{
    if(response.status === "error"){
        return `エラー: ${response.message}`;
    }
    
    return `${response.data.length}件のデータがあります`;
}