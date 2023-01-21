import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit{
cartProducts:any=[]
total:any=0
success:boolean=false
constructor(private services:CartsService){

}
  ngOnInit(): void {
    this.getCartProduct()
  }
getCartProduct(){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
    }
    this.getTotal()
  }
addAmount(index:number){
  this.cartProducts[index].quantity++;
  this.getTotal()
  localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
}
minsAmount(index:number){
  if(this.cartProducts[index].quantity<=0){
    '';
  }else{
  this.cartProducts[index].quantity--;
  this.getTotal()
  localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
  }
}
detectChange(){
  this.getTotal()
  localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
}
deleteProduct(index:number){
    this.cartProducts.splice(index,1);
    this.getTotal()
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
  }
clearData(){
    this.cartProducts=[];
    this.success=false;
    this.getTotal()
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
  }
getTotal(){
    this.total=0
    for (let x in this.cartProducts)
    this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    this.total = this.total.toFixed(2)
  }
  addCart(){
    let products=this.cartProducts.map((item: { item: { id: any; }; quantity: any; }) =>{
      return {productId:item.item.id , quantity:item.quantity}
    })
    let model={
      userId:5,
      date:new Date(),
      products:products
    }
    this.services.createNewCard(model).subscribe((res: any)=>{
      this.success=true;
    })
  }
}
