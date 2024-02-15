import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  storeInfo:StoreData;
  isImageShown:boolean=true;
  private timer : any;
  constructor(public promotionAdsService:PromotionAdsService){
    this.storeInfo=new StoreData("Ghada Store",["Alex","Cairo"],"https://fastly.picsum.photos/id/1021/200/200.jpg?hmac=5Jzd15OWoPw0fwvsvL05A1BAIN_B543TvjlxqGk1PDU")
  }
  ngOnInit() {

    this.timer = this.promotionAdsService.scheduleAds(2)
    //.pipe( filter(x => x === "Sale"))
    .subscribe((data: any) => {
      console.log(data)
    }, // for handling data
      (error: any) => console.log(error), // for handling error
      () => console.log('completed'))
   // this.timer = this.promotionAdsService.scheduleAds1().pipe(
   //   filter(x => x === "Sale")).subscribe((data: any) => {
   //     console.log(data)
   //   }, // for handling data
   //     (error: any) => console.log(error), // for handling error
   //     () => console.log('completed'))

   

 }

 ngOnDestroy() { 
   debugger;
   this.timer.unsubscribe();
}

  toggleImage(){
    this.isImageShown=!this.isImageShown;

  }
}