import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsComponent } from '../products/products.component';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
   @ViewChild('clientNameID') clientNameID!:ElementRef;
   @ViewChild(ProductsComponent) productsComponent!:ProductsComponent;
    CatId:number=0;
    totalPrice:number=0;
    categoryLst:Icategory[]=[];
    constructor(public router:Router,public categoryService:CategoryService)
    {
    
     this.categoryService.getAllProducts().subscribe((data:any)=>{ this.categoryLst=data}); 
       
    }
    details(id:number)
    {
     this.router.navigate(['Products',id]);
    
    }

    onTotalPriceChange(totalPrice:number)
{
  this.totalPrice=totalPrice;
}


ngAfterViewInit():void {
//  this.productsComponent.productLst=[  ];
  this.clientNameID.nativeElement.value="Enter Name";
  this.clientNameID.nativeElement.style.color="red";
}
  }
  