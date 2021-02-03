import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { TemplateType, TemplateTypeFromBackend } from '../template.models';
import { map } from 'rxjs/operators';
import { blockTypeMap } from '../block.map';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<TemplateType> {

    const getComponentType = (blockType: string): Type<any> => {
      return blockTypeMap.get(blockType);
    };

    const transformBlockType = (templateType: TemplateTypeFromBackend): TemplateType => {
      return {
        id: templateType.id,
        data: templateType.data,
        blockType: getComponentType(templateType.blockType),
        childrenBlocks: templateType.childrenBlocks.map(block => transformBlockType(block))
      };
    };

    return this.http.get<TemplateTypeFromBackend>(`${environment.BaseURL}/blocks`).pipe(
      map((res: TemplateTypeFromBackend) => transformBlockType(res)));
  }

  updateData(id: number, data: any): Observable<any> {
    return this.http.put<Observable<any>>(`${environment.BaseURL}/blocks/${id}/data`, data);
  }
}
