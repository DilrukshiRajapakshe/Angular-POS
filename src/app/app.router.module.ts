import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashbordComponent} from './dashbord/dashbord.component';
import {ManageCustomersComponent} from './manage-customers/manage-customers.component';
import {ManageItemsComponent} from './manage-items/manage-items.component';
import {PlaceOrderComponent} from './place-order/place-order.component';
import {ViewOrdersComponent} from './view-orders/view-orders.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {rootRoute} from '@angular/router/src/router_module';

const appRouts: Routes = [
  {
    path: "dashboard",
    component: DashbordComponent
  },
  {
    path: "manage-customers",
    component: ManageCustomersComponent
  },
  {
    path: "manage-items",
    component: ManageItemsComponent
  },
  {
    path: "place-order",
    component: PlaceOrderComponent
  },
  {
    path: "view-orders",
    component: ViewOrdersComponent
  },
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full" //full | prefix
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRouts)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
