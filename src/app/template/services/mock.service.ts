import { IEditableBlock, TemplateType } from '../template.models';
import { TextFieldComponent } from '../editable-blocks/text-field/text-field.component';
import { BlockComponent } from '../editable-blocks/block/block.component';
import { Injectable } from '@angular/core';

@Injectable()

export class MockService {
  getTemplateStructure(): TemplateType {
    return {
      id: 1,
      componentType: BlockComponent,
      data: {
        blockDirection: 'column',
        styles: 'column block1'
      },
      childrenComponents: [
        {
          id: 2,
          componentType: TextFieldComponent,
          childrenComponents: [],
          data: {
            text: 'Есть ли жизнь на Донбассе?'
          }
        },
        {
          id: 3,
          componentType: TextFieldComponent,
          childrenComponents: [],
          data: {
            text: 'acasc as sa as a'
          }
        },
        {
          id: 4,
          componentType: BlockComponent,
          data: {
            blockDirection: 'column',
            styles: 'column block2'
          },
          childrenComponents: [
            {
              id: 5,
              componentType: TextFieldComponent,
              childrenComponents: [],
              data: {
                text: 'Есть ли жизнь внутри блока??'
              }
            },
            {
              id: 6,
              componentType: TextFieldComponent,
              childrenComponents: [],
              data: {
                text: 'да!'
              }
            }
          ]
        },
        {
          id: 7,
          componentType: BlockComponent,
          data: {
            blockDirection: 'column',
            styles: 'column block3'
          },
          childrenComponents: [
            {
              id: 8,
              componentType: TextFieldComponent,
              childrenComponents: [],
              data: {
                text: 'Есть ли жизнь внутри блока??'
              }
            },
            {
              id: 9,
              componentType: TextFieldComponent,
              childrenComponents: [],
              data: {
                text: 'да!'
              }
            }
          ]
        }
      ]
    };
  }

  getBlockWithoutChildren({childrenComponents, ...other}: TemplateType): IEditableBlock {
    return other;
  }

  getBlockById(id: number, data: TemplateType): any {
    if (data.id === id) {
      return this.getBlockWithoutChildren(data);
    }

    for (const component of data.childrenComponents) {
      if (id === component.id) {
        return this.getBlockWithoutChildren(component);
      }
      const found = this.getBlockById(id, component);
      if (found) {
        return this.getBlockWithoutChildren(found);
      }
    }
  }

}
