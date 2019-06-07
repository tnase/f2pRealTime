import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'account', loadChildren: './createAccount/account/account.module#AccountPageModule' },
  { path: 'login', loadChildren: './createAccount/login/login.module#LoginPageModule' },
  { path: 'list-post', loadChildren: './posts/list-post/list-post.module#ListPostPageModule' },
  { path: 'add-post', loadChildren: './posts/add-post/add-post.module#AddPostPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
