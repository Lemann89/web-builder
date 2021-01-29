import { Type } from '@angular/core';

export type TemplateType = {
  componentType: Type<any>;
  childrenComponents: TemplateType[];
  id: number;
  data?: any;
};

export interface IEditableBlock {
  id: number;
  componentType: Type<any>;
  data?: any;
}
