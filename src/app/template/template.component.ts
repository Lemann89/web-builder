import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { TemplateType } from './template.models';
import { TemplateService } from './services/template.service';
import { BlockService } from './services/block.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateComponent implements OnInit, AfterViewInit {

  @ViewChild('structureContainer', {static: false, read: ViewContainerRef}) structureContainer: ViewContainerRef;
  @ViewChild('actionsContainer', {static: false, read: ViewContainerRef}) actionsContainer: ViewContainerRef;

  structure: TemplateType;
  actionComponentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private changeDetectorRef: ChangeDetectorRef,
              private templateService: TemplateService,
              private http: BlockService) {
  }

  ngOnInit(): void {
    this.templateService.blockActionsSubject.subscribe(res => {
      const componentRef = this.buildComponent(res.component);
      this.actionComponentRef = componentRef;
      componentRef.instance.blockData = res.data;
      // tslint:disable-next-line:only-arrow-functions
      componentRef.instance.onDestroy = function(): void {
        componentRef.destroy();
      };
    });
  }

  async ngAfterViewInit(): Promise<void> {
    this.structure = await this.http.getAll().toPromise();
    this.generateBlockStructure();
  }

  buildComponent<T>(component: Type<T>): ComponentRef<T> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    return this.actionsContainer.createComponent(componentFactory);
  }

  generateBlockStructure(): void {
    const componentRef = this.buildComponent(this.structure.blockType);
    componentRef.instance.structure = this.structure;
    this.changeDetectorRef.detectChanges();
  }
}
