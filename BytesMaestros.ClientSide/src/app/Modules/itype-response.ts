import { HttpStatusCode } from "@angular/common/http";
import { IType } from "./itype";

export interface ITypeResponse {
  statusCode:HttpStatusCode;
  message:string;
  data:IType[];
  word?:string;
  error:string[];
}
