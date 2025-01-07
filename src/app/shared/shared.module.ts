import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from '../shared/theme-switcher/theme-switcher.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';

@NgModule({
  declarations: [
    ThemeSwitcherComponent,
    BackToTopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThemeSwitcherComponent,
    BackToTopComponent
  ]
})
export class SharedModule { }
