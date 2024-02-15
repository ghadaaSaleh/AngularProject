import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { ProductsComponent } from './Components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightboxDirective } from './Directives/lightbox.directive';
import { UsdToEgpPipe } from './Pipes/usd-to-egp.pipe';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    HomeComponent,
    OrdersComponent,
    ProductsComponent,
    LightboxDirective,
    UsdToEgpPipe,
    MainLayoutComponent,
    NotFoundComponent,
    LoginComponent,
    ProductDetailsComponent,
    AddProductComponent,
    UserRegisterComponent,//pipe
    
  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    AppRoutingModule,
    FormsModule,//for ng model
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
