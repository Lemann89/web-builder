import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TemplateType } from '../../template.models';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  @ViewChild('field', {static: false, read: ElementRef}) field: ElementRef;

  structure: TemplateType;

  constructor() {
  }

  ngOnInit(): void {
  }


  onFieldClick(): void {
    this.field.nativeElement.setAttribute('contenteditable', 'true');
    this.field.nativeElement.focus();
  }

  onFieldBlur(): void {
    this.field.nativeElement.removeAttribute('contenteditable');
    this.structure.data.text = this.field.nativeElement.textContent;
    console.log(this.structure.data.text);
  }

  onFieldInput(): void {
  }
}
