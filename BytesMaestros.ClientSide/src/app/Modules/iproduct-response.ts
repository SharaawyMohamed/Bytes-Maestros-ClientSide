import { HttpStatusCode } from "@angular/common/http";
import { IProduct } from "./iproduct";

export interface IProductResponse {
  statusCode:HttpStatusCode;
  message:string;
  data:IProduct[];
  word?:string;
  error:string[];
}
