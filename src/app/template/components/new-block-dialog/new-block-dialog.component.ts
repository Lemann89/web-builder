import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from '../../../../environments/environment';
import { BlockService } from '../../services/block.service';
import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'app-new-block-dialog',
  templateUrl: './new-block-dialog.component.html',
  styleUrls: ['./new-block-dialog.component.scss']
})
export class NewBlockDialogComponent implements OnInit {

  form: FormGroup;
  newBlockSub: Subscription;


  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any, private blockService: BlockService, private templateService: TemplateService) {
  }


  buildForm(): void {
    this.form = new FormGroup({
      blockType: new FormControl(''),
      data: new FormGroup({
        text: new FormControl(''),
        blockDirection: new FormControl('')
      }),
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
}
