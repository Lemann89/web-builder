import { Type } from '@angular/core';
import { BlockComponent } from './blocks/block/block.component';
import { TextFieldComponent } from './blocks/text-field/text-field.component';
import { ImageComponent } from './blocks/image/image.component';

export const blockTypeMap = new Map<string, Type<any>>();
blockTypeMap.set('Block', BlockComponent);
blockTypeMap.set('Text', TextFieldComponent);
blockTypeMap.set('Image', ImageComponent);
