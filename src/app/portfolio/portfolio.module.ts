import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    MainPageComponent,
    HomeComponent,
    AboutMeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    RouterLink,
    SharedModule
  ]
})
export class PortfolioModule { }
