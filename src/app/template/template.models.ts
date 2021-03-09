import { Type } from '@angular/core';

type Data = {
  text?: string;
  blockDirection?: string;
  imageUrl?: string;
  imageAlt?: string;
};

type Styles = {
  width: number;
  height: number;
};

export type TemplateType = {
  blockType: Type<any>;
  childrenBlocks: TemplateType[];
  id: number;
  data?: Data;
  styles?: Styles;
};

export type TemplateTypeFromBackend = {
  blockType: string;
  childrenBlocks: TemplateTypeFromBackend[];
  id: number;
  data?: any;
  styles?: any;
};

interface INewBlockFormTemplateSelectOptions {
  label: string;
  value: string;
}

export interface INewBlockFormTemplate {
  type: string;
  formControlLabel: string;
  label: string;
  options?: Array<INewBlockFormTemplateSelectOptions>;
}

export type BlockTypes = 'Block' | 'Image' | 'Text';
