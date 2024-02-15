import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  newPrd={} as Iproduct;
  constructor(private productService:ProductsService,public router:Router){
  
//     let p= {
//       "id":9,
//       "name":"Pear",
//       "price":1221321,
//       "quantity":1,
//       "imageUrl":"https://plus.unsplash.com/premium_photo-1677838847808-686ac388d5f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       "categoryID":1
//     };
// this.productService.addProduct(p).subscribe((data: any) => {
//   console.log("added")
// }, // for handling data
//   (error: any) => console.log(error), // for handling error
//   () => console.log('completed'))
 
  }  
  


  addProduct()
  {debugger
   
this.productService.addProduct(this.newPrd).subscribe((data: any) => {
  console.log(data);
  this.router.navigate(["/Orders"])
 debugger
}, // for handling data
  (error: any) => console.log(error+"ddddddd"), // for handling error
  () => console.log('completed'))
 // this.productLst=p.getAllProducts(); 
 
  }
}
