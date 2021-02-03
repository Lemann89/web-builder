import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IActionComponent } from '../template.models';

@Injectable()

export class TemplateService {
  blockActionsSubject = new Subject<IActionComponent>();
}
