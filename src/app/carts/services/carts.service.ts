import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient){
  }
  createNewCard(model:any){
    return this.http.post(environment.baseApi + '/carts', model)
  }
}
