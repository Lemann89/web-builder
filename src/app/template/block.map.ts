import { Type } from '@angular/core';
import { BlockComponent } from './blocks/block/block.component';
import { TextFieldComponent } from './blocks/text-field/text-field.component';

export const blockTypeMap = new Map<string, Type<any>>();
blockTypeMap.set('Block', BlockComponent);
blockTypeMap.set('TextField', TextFieldComponent);
