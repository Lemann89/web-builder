import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IEditableBlock } from '../template.models';

@Injectable()

export class TemplateService {
  editPanelSubject = new Subject<IEditableBlock>();

}
