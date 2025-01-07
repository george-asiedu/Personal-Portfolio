import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainPageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ]
})
export class PortfolioModule { }
