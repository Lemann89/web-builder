import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TemplateType } from '../../template.models';
import { BlockService } from '../../services/block.service';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  @ViewChild('field', {static: false, read: ElementRef}) field: ElementRef;

  structure: TemplateType;

  constructor(private blockService: BlockService) {}

  ngOnInit(): void {}


  onFieldClick(): void {
    this.field.nativeElement.setAttribute('contenteditable', 'true');
    this.field.nativeElement.focus();
  }

  onFieldBlur(): void {
    this.field.nativeElement.removeAttribute('contenteditable');
    this.structure.data.text = this.field.nativeElement.textContent;
    this.blockService.updateData(this.structure.id, this.structure.data).subscribe();
  }
}
