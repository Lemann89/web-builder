import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BlockService } from '../../services/block.service';
import { TemplateService } from '../../services/template.service';
import { NewBlockService } from '../../services/new-block.service';

@Component({
  selector: 'app-new-block-dialog',
  templateUrl: './new-block-dialog.component.html',
  styleUrls: ['./new-block-dialog.component.scss']
})
export class NewBlockDialogComponent implements OnInit {

  form: FormGroup;
  newBlockSub: Subscription;
  blockTypeValue: string;
  blocksWithCommonStyles: Array<'Block' | 'Image'> = ['Block', 'Image'];

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
              private blockService: BlockService,
              private templateService: TemplateService,
              public newBlockService: NewBlockService) {
  }

  createFormGroup(formTemplate): FormGroup {
    const group = {};
    formTemplate.forEach(inputTemplate => {
      group[inputTemplate.formControlLabel] = new FormControl('');
    });
    return new FormGroup(group);
  }

  buildForm(): void {
    this.form = new FormGroup({
      blockType: new FormControl(''),
      parentBlockId: new FormControl(this.dialogData.blockId),
    });
  }

  onSubmit(): void {
    console.log(this.form.getRawValue());
    this.blockService.create(this.form.getRawValue()).subscribe(res => {
      this.templateService.getAllBlocksSubject.next(res);
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  blockTypeChange(event): void {
    this.blockTypeValue = event.value;
    if (this.blocksWithCommonStyles.includes(event.value)) {
      console.log(this.createFormGroup(this.newBlockService.commonStylesFormTemplate));
      this.form.addControl('styles', this.createFormGroup(this.newBlockService.commonStylesFormTemplate));
    } else {
      this.form.removeControl('styles');
    }
    if (this.form.get('data')) {
      this.form.setControl('data', this.createFormGroup(this.newBlockService.createFormTemplateMap().get(this.blockTypeValue)));
      return;
    }
    this.form.addControl('data', this.createFormGroup(this.newBlockService.createFormTemplateMap().get(this.blockTypeValue)));
    console.log(this.form);
  }
}
