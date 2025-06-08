import { HttpStatusCode } from "@angular/common/http";

export interface IOrderResponse {
  statusCode:HttpStatusCode;
  message:string;
  data:Date[];
  word?:string;
  error:string[];
}
