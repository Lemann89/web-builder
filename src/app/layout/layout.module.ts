import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './blocks/header/header.component';
import { HeroComponent } from './blocks/hero/hero.component';
import { FooterComponent } from './blocks/footer/footer.component';
import { TemplateModule } from '../template/template.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, HeroComponent, FooterComponent],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    TemplateModule
  ]
})
export class LayoutModule {
}
