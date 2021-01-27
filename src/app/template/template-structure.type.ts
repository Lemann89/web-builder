import { Type } from '@angular/core';

export type TemplateType = {
  componentType: Type<any>;
  childrenComponents: TemplateType[];
  data?: any;
};
