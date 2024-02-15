import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {

  private adsList:string[];
  constructor() { 

    this.adsList=["Big Discounts","Sale up to 50%","Sale up to 35%","Sale","Special White friday offers"];
  }
  public scheduleAds(intervalInSeconds:number):Observable<string> {
   // this.adsList=["Big Discounts","Sale up to 50%","Sale up to 35%","","Special White friday offers"];
    //Observable from Create Method
    let counter=0;
    const obsUsingCreate = new Observable<string>((observer)=>{
      let intervalId = setInterval(() => {
       // observer.error("error");
        if( counter==this.adsList.length)
        {counter=0;
         // observer.complete();
        }
        if( this.adsList[counter]=="")
        {
          observer.error("error");
          counter++;
        }
        else{
        observer.next( this.adsList[counter] )
        counter++;
        }
    },intervalInSeconds* 1000)
    //observer.complete();
    //return {unsubscribe() {}};

    })
    
   return obsUsingCreate;
 }
}
