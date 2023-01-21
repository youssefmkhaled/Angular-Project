import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit{
  id:any;
  data:any={}
  loading:boolean=true
  constructor(private route:ActivatedRoute ,private service:ProductsService){
    this.id= this.route.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(){
    this.loading=false;
    this.service.getProductsById(this.id).subscribe(res=>{
      this.loading=true
      this.data=res
    })
  }
}
