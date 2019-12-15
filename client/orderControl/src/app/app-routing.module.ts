import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./pages/local/local.module').then( m => m.LocalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'create-product',
    loadChildren: () => import('./pages/create-product/create-product.module').then( m => m.CreateProductPageModule)
  },
  {
    path: 'create-product/:id',
    loadChildren: () => import('./pages/create-product/create-product.module').then( m => m.CreateProductPageModule)
  },
  {
    path: 'create-ingredient',
    loadChildren: () => import('./pages/create-ingredient/create-ingredient.module').then( m => m.CreateIngredientPageModule)
  },
  {
    path: 'create-ingredient/:id',
    loadChildren: () => import('./pages/create-ingredient/create-ingredient.module').then( m => m.CreateIngredientPageModule)
  },
  {
    path: 'ingredient',
    loadChildren: () => import('./pages/ingredient/ingredient.module').then( m => m.IngredientPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'product-details/:id',
    loadChildren: () => import('./pages/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'ingredient-details/:id',
    loadChildren: () => import('./pages/ingredient-details/ingredient-details.module').then( m => m.IngredientDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
