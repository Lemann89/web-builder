import { TemplateType } from './template-structure.type';
import { TextFieldComponent } from './editable-blocks/text-field/text-field.component';
import { BlockComponent } from './editable-blocks/block/block.component';
import { Injectable } from '@angular/core';

@Injectable()

export class MockService {
  getTemplateStructure(): TemplateType {
    return {
      componentType: BlockComponent,
      data: {
        flexDirection: 'column'
      },
      childrenComponents: [
        {
          componentType: TextFieldComponent,
          childrenComponents: [],
          data: {
            text: 'Есть ли жизнь на Донбассе?'
          }
        },
        {
          componentType: TextFieldComponent,
          childrenComponents: [],
          data: {
            text: 'acasc as sa as a'
          }
        },
        {
          componentType: BlockComponent,
          data: {
            flexDirection: 'row '
          },
          childrenComponents: [
            {
              componentType: TextFieldComponent,
              childrenComponents: [],
              data: {
                text: 'Есть ли жизнь внутри блока??'
              }
            },
            {
              componentType: TextFieldComponent,
              childrenComponents: [],
              data: {
                text: 'да!'
              }
            }
          ]
        },
        {
          componentType: BlockComponent,
          data: {
            flexDirection: 'row '
          },
          childrenComponents: [
            {
              componentType: TextFieldComponent,
              childrenComponents: [],
              data: {
                text: 'Есть ли жизнь внутри блока??'
              }
            },
            {
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
}
