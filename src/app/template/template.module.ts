import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { TextFieldComponent } from './blocks/text-field/text-field.component';
import { BlockComponent } from './blocks/block/block.component';
import { SharedModule } from '../shared/shared.module';
import { TemplateService } from './services/template.service';
import { BlockService } from './services/block.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewBlockDialogComponent } from './components/new-block-dialog/new-block-dialog.component';
import { MaterialModule } from '../shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockSettingsSidenavComponent } from './components/block-settings-sidenav/block-settings-sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './blocks/image/image.component';


@NgModule({
  declarations: [TemplateComponent, TextFieldComponent, BlockComponent, NewBlockDialogComponent, BlockSettingsSidenavComponent, ImageComponent],
  exports: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TemplateService,
    BlockService
  ]
})
export class TemplateModule {
}
