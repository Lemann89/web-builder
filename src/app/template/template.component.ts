import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MockService } from './services/mock.service';
import { TemplateType } from './template.models';
import { TemplateService } from './services/template.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateComponent implements OnInit, AfterViewInit {

  @ViewChild('container', {static: false, read: ViewContainerRef}) container: ViewContainerRef;

  editableBlockData: any;
  structure: TemplateType;
  isEditPanelOpen = false;

  constructor(private mockService: MockService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private changeDetectorRef: ChangeDetectorRef,
              private templateService: TemplateService) {
  }

  ngOnInit(): void {
    this.structure = this.mockService.getTemplateStructure();
    this.templateService.editPanelSubject.subscribe(block => {
      this.editableBlockData = block.data;
      this.isEditPanelOpen = true;
    });
  }

  ngAfterViewInit(): void {
    this.generateStructure();
  }

  generateStructure(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.structure.componentType);
    const componentRef = this.container.createComponent(componentFactory);
    componentRef.instance.structure = this.structure;
    this.changeDetectorRef.detectChanges();
  }

}
