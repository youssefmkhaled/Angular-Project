import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get(environment.baseApi + '/products')
  }
  getAllcategories(){
    return this.http.get(environment.baseApi + '/products/categories')
  }
  getFilterdcategories(key:string){
    return this.http.get(environment.baseApi + '/products/category/'+ key)
  }
  getProductsById(id:number){
    return this.http.get(environment.baseApi + '/products/' + id)
  }
}
