import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  currentPid :number=0;
  prdIdArray :number[]=[];
  Product :Iproduct|null=null;
  constructor(private router:Router,private activeRoute:ActivatedRoute,public productService:StaticProductsService
    ,public location:Location
    ) {

console.log(1)

     }

  ngOnInit() {

   this.prdIdArray=this.productService.getAllProductsIds();
    console.log( this.activeRoute.snapshot.paramMap.get("pid"))
   this.activeRoute.paramMap.subscribe(p=>{
    this.currentPid=Number(p.get('pid'));
    this.Product=this.productService.getAllProductsById(this.currentPid);


   })
  }
  goback()
  {
    this.location.back();
  }
  Previous()
  {
    let currentIndex=this.prdIdArray.findIndex(e=>e==this.currentPid);
    if(currentIndex>0)
    {let previous=this.prdIdArray[currentIndex-1];
      this.router.navigate(['products',previous]);
      this.currentPid=previous;
    }
    
  }
  Next()
  {let currentIndex=this.prdIdArray.findIndex(e=>e==this.currentPid);
    if(currentIndex<this.prdIdArray.length)
    {let next=this.prdIdArray[currentIndex+1];
      this.currentPid=next;
      this.router.navigate(['products',next]);

    }}
}

