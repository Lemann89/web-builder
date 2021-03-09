import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class TemplateService {
  blockSettingsSubject = new Subject<any>();
  getAllBlocksSubject = new Subject<any>();
  newBlockFormTemplateSubject = new Subject<any>();
}
