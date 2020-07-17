import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public firstPage: string = "";
public prevPage: string = "";
public nextPage: string = "";
public lastPage: string = "";

 
  private getAllProductsUrl = "https://localhost:5001/api/Products";

  //https://localhost:5001/api/Products
  
  constructor(private http:HttpClient) { }

  getAllProducts(){
    console.log(this.http.get<any>(this.getAllProductsUrl));

    return this.http.get<any>(this.getAllProductsUrl);
  }


}
