import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() data:any={};
@Output() item=new EventEmitter()
addButn:boolean=true
amount:number=0;
  constructor(){
}
add(){
  this.item.emit({item:this.data , quantity:this.amount});
}
}
