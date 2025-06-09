import { HttpStatusCode } from "@angular/common/http";

export interface IOrderResponse {
  statusCode:number;
  message:string;
  data:Date[];
  word?:string;
  error:string[];
}
