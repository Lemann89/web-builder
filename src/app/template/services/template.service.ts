import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class TemplateService {
  blockSettingsSubject = new Subject<any>();
  getAllBlocksSubject = new Subject<any>();
}
