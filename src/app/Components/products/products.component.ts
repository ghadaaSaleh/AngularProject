import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Output () totalPriceChanged:EventEmitter<number>;
  @Input() selectedCatId:number=0;
  productLstByCat:Iproduct[]=[];
  CatId:number=0;
  productLst:Iproduct[]=[];
  totalPrice:number=0;
  constructor(public router:Router,public productsService:ProductsService)
  { this.totalPriceChanged=new EventEmitter<number>();
     productsService.getAllProducts().subscribe((x: any)=>{ this.productLst=x; this.productLstByCat=x});
  }
  details(id:number)
  {
    console.log(id)
   this.router.navigate(['Products',id]);
  
  }
    buy(id:number,count:string,price:number)
  {
   
    this.totalPrice+= parseInt(count)*price;
    console.log("1")
    this.totalPriceChanged.emit(this.totalPrice);
  }

  ngOnChanges(): void {
    if(this.selectedCatId==0){this.productLstByCat=this.productLst}
    else
    {
    this.productsService.getAllProductsByCategory(this.selectedCatId)
    .subscribe((x)=>{ this.productLstByCat=x;});
    }
   }
}
