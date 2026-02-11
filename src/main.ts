//main.ts
import { handleResponse } from "./utils";
import { ApiResponse } from "./interface";
const successCase: ApiResponse = {
  status: "success",
  data: ["TypeScript", "React", "Next.js"],
};

// ケース2: エラー時
const errorCase: ApiResponse = {
  status: "error",
  message: "通信に失敗しました。インターネット接続を確認してください。",
};

console.log(handleResponse(successCase));
console.log(handleResponse(errorCase));