
import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  categories:any[]=[];
  Products:any[]=[];
  loading:boolean=false;
  cartProducts:any[]=[];
constructor(private service:ProductsService){
}
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

getProducts(){
  this.loading=true
  this.service.getAllProducts().subscribe((res:any)=>{
    this.Products = res
    this.loading=false
  })
}
getCategories(){
  this.loading=true
  this.service.getAllcategories().subscribe((res:any)=>{
    this.loading=false
    this.categories = res;
  })
}
filteredCategory($event:any){
  this.loading=true;
  let value = $event.target.value;
  (value == "all")? this.getProducts() : this.service.getFilterdcategories(value).subscribe((res:any)=>{
    this.loading=false;
    this.Products = res;
    })
  }
  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if (exist){
        alert ('product already in cart')
      }else{
        this.cartProducts.push(event)
        localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
      }
    }else {
      this.cartProducts.push(event)
      localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
    }
  }
}
