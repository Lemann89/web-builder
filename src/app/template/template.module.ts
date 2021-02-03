import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { TextFieldComponent } from './editable-blocks/text-field/text-field.component';
import { BlockComponent } from './editable-blocks/block/block.component';
import { SharedModule } from '../shared/shared.module';
import { EditPanelComponent } from './blocks/edit-panel/edit-panel.component';
import { TemplateService } from './services/template.service';
import { BlockService } from './services/block.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateModalComponent } from './blocks/create-modal/create-modal.component';


@NgModule({
  declarations: [TemplateComponent, TextFieldComponent, BlockComponent, EditPanelComponent, CreateModalComponent],
  exports: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    TemplateService,
    BlockService
  ]
})
export class TemplateModule {
}
