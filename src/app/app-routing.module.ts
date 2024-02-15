import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { HomeComponent } from './Components/home/home.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { userAuthGuard } from './Guards/user-auth.guard';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';


const routes: Routes = [
  {path:'',component:MainLayoutComponent, children:[
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'orders',component:OrdersComponent, canActivate: [userAuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'products/:pid',component:ProductDetailsComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'signUp',component:UserRegisterComponent},
  
  ]}
  ,{path:'**',component:NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
