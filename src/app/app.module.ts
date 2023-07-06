import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ArticleComponent } from './modules/pages/article/article.component';
import { Error404Component } from './modules/pages/error404/error404.component';
import { CategorieComponent } from './modules/pages/categorie/categorie.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {RouterModule} from "@angular/router";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    ArticleComponent,
    Error404Component,
    CategorieComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    InfiniteScrollModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// platformBrowserDynamic().bootstrapModule(AppModule);
