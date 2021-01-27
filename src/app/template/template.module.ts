import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { TextFieldComponent } from './editable-blocks/text-field/text-field.component';
import { BlockComponent } from './editable-blocks/block/block.component';
import { MockService } from './mock.service';



@NgModule({
  declarations: [TemplateComponent, TextFieldComponent, BlockComponent],
  exports: [
    TemplateComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MockService
  ]
})
export class TemplateModule { }
