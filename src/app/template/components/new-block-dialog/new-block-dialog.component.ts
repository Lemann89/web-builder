import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BlockService } from '../../services/block.service';
import { TemplateService } from '../../services/template.service';
import { NewBlockService } from '../../services/new-block.service';
import { BlockTypes, INewBlockFormTemplate } from '../../template.models';

@Component({
  selector: 'app-new-block-dialog',
  templateUrl: './new-block-dialog.component.html',
  styleUrls: ['./new-block-dialog.component.scss']
})
export class NewBlockDialogComponent implements OnInit {

  form: FormGroup;
  newBlockSub: Subscription;
  blockTypeValue: any;
  formTemplate: Array<INewBlockFormTemplate> = [];
  blocksWithCommonStyles: Array<'Block' | 'Image'> = ['Block', 'Image'];

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
              private blockService: BlockService,
              private templateService: TemplateService,
              public newBlockService: NewBlockService,
              private formBuilder: FormBuilder) {
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      blockType: new FormControl(''),
      data: [],
      styles: [],
      parentBlockId: new FormControl(this.dialogData.blockId),
    });
  }


  onSubmit(): void {
    console.log(this.form.getRawValue());
    // this.blockService.create(this.form.getRawValue()).subscribe(res => {
    //   this.templateService.getAllBlocksSubject.next(res);
    // });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  blockTypeChange(event): void {
    this.blockTypeValue = event.value;
    this.formTemplate = this.newBlockService.createFormTemplateMap().get(this.blockTypeValue);
  }
}
