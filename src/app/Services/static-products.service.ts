import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  productLst:Iproduct[];
  constructor() { 
    this.productLst=[  {
      "id":1,
      "name":"Pear",
      "price":1221321,
      "quantity":1,
      "imageUrl":"https://plus.unsplash.com/premium_photo-1677838847808-686ac388d5f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "categoryID":1
    },
    {
      "id":2,
      "name":"Galaxy",
      "price":120892,
      "quantity":1,
      "imageUrl":"https://images.unsplash.com/photo-1618590067824-5ba32ca76ce9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "categoryID":2
    },{
      "id":3,
      "name":"Chipsy",
      "price":1900898,
      "quantity":1,
      "imageUrl":"https://images.unsplash.com/photo-1510772314292-9c0ad420734a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "categoryID":3
    },{
      "id":4,
      "name":"Lay's",
      "price":12000,
      "quantity":1,
      "imageUrl":"https://images.unsplash.com/photo-1510772314292-9c0ad420734a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "categoryID":3
    },
    {
      "id":5,
      "name":"Moro",
      "price":1211212,
      "quantity":1,
      "imageUrl":"https://images.unsplash.com/photo-1510772314292-9c0ad420734a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "categoryID":2
    },
    
    {
      "id":6,
      "name":"Cabury",
      "price":1211212,
      "quantity":1,
      "imageUrl":"https://images.unsplash.com/photo-1510772314292-9c0ad420734a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "categoryID":2
    }] 


  }

  public getAllProducts()
  {return this.productLst;}

 public getAllProductsByCategory(categoryID:number)
  {return this.productLst.filter(i=>i.categoryID==categoryID);}
 
  getAllProductsById(id:number)
  {
    let product= this.productLst.find(i=>i.id==id);
    return product?product:null
}
getAllProductsIds():number[]
{
  return this.productLst.map(p=>p.id);
  }
}
