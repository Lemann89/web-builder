import { Injectable } from '@angular/core';
import { INewBlockFormTemplate } from '../template.models';

@Injectable({
  providedIn: 'root'
})
export class NewBlockService {

  constructor() {
  }

  commonStylesFormTemplate: Array<INewBlockFormTemplate> = [
    {
      type: 'Number',
      formControlLabel: 'width',
      label: 'Width'
    },
    {
      type: 'Number',
      formControlLabel: 'height',
      label: 'Height'
    },
  ];

  blockFormTemplate: Array<INewBlockFormTemplate> = [
    {
      type: 'Select',
      formControlLabel: 'blockDirection',
      label: 'Block Direction',
      options: [
        {
          label: 'Column',
          value: 'column'
        },
        {
          label: 'Row',
          value: 'row'
        }
      ]
    }
  ];

  imageFormTemplate: Array<INewBlockFormTemplate> = [
    {
      type: 'Text',
      formControlLabel: 'imageUrl',
      label: 'Image Url'
    },
    {
      type: 'Text',
      formControlLabel: 'imageAlt',
      label: 'Image Alt'
    }
  ];

  textFormTemplate: Array<INewBlockFormTemplate> = [
    {
      type: 'Text',
      formControlLabel: 'text',
      label: 'Text'
    }
  ];

  createFormTemplateMap(): Map<string, Array<INewBlockFormTemplate>> {
    const formTemplateMap = new Map<string, Array<any>>();
    formTemplateMap.set('Block', this.blockFormTemplate);
    formTemplateMap.set('Text', this.textFormTemplate);
    formTemplateMap.set('Image', this.imageFormTemplate);
    return formTemplateMap;
  }

}
