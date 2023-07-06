import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./modules/pages/home/home.component";
import {ArticleComponent} from "./modules/pages/article/article.component";
import {Error404Component} from "./modules/pages/error404/error404.component";
import {CategorieComponent} from "./modules/pages/categorie/categorie.component";

const routes: Routes = [
  {
    // http://localhost:4200/
    path: '',
    component: HomeComponent
  },
  {
    path: 'page-not-found',
    component: Error404Component
  },
  {
    //définir un paramètre dans notre route
    path: ':category',
    component: CategorieComponent
  },
  {
    path: ':category/:article',
    component: ArticleComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
