//interface.ts

type SuccessResponse = {
  status: "success";
  data: string[];
};

type ErrorResponse = {
  status: "error";  
  message: string;
};


export type ApiResponse = SuccessResponse | ErrorResponse;