import { Type } from '@angular/core';

export type TemplateType = {
  blockType: Type<any>;
  childrenBlocks: TemplateType[];
  id: number;
  data?: any;
};

export type TemplateTypeFromBackend = {
  blockType: string;
  childrenBlocks: TemplateTypeFromBackend[];
  id: number;
  data?: any;
};

export interface IEditableBlock {
  id: number;
  blockType: Type<any>;
  data?: any;
}

export interface INewBlockDialog {
  component: Type<any>;
  id: number;
}
