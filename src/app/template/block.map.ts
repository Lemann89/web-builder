import { Type } from '@angular/core';
import { BlockComponent } from './editable-blocks/block/block.component';
import { TextFieldComponent } from './editable-blocks/text-field/text-field.component';

export const blockTypeMap = new Map<string, Type<any>>();
blockTypeMap.set('Block', BlockComponent);
blockTypeMap.set('TextField', TextFieldComponent);
