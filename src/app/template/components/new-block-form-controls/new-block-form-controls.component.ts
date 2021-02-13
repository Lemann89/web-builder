import { Component, Input, OnInit } from '@angular/core';
import { INewBlockFormTemplate } from '../../template.models';
import { FormGroup } from '@angular/forms';
import { NewBlockService } from '../../services/new-block.service';

@Component({
  selector: 'app-new-block-form-controls',
  templateUrl: './new-block-form-controls.component.html',
  styleUrls: ['./new-block-form-controls.component.scss']
})
export class NewBlockFormControlsComponent implements OnInit {

  constructor(public newBlockService: NewBlockService) { }

  @Input() form: FormGroup;

  ngOnInit(): void {
  }

}
