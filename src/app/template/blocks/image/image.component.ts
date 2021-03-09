import { Component, OnInit } from '@angular/core';
import { TemplateType } from '../../template.models';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  structure: TemplateType;

  constructor() {
  }

  ngOnInit(): void {
  }

}
