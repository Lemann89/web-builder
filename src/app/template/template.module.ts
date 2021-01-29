import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { TextFieldComponent } from './editable-blocks/text-field/text-field.component';
import { BlockComponent } from './editable-blocks/block/block.component';
import { MockService } from './services/mock.service';
import { SharedModule } from '../shared/shared.module';
import { EditPanelComponent } from './blocks/edit-panel/edit-panel.component';
import { TemplateService } from './services/template.service';



@NgModule({
  declarations: [TemplateComponent, TextFieldComponent, BlockComponent, EditPanelComponent],
  exports: [
    TemplateComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ],
  providers: [
    MockService,
    TemplateService
  ]
})
export class TemplateModule { }
