import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'product',
    loadChildren:
      () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'request',
    loadChildren:
      () => import('./request/request.module').then(m => m.RequestModule)
  },
  /*{ path: '**', redirectTo: '/home', pathMatch: 'full' }*/
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
