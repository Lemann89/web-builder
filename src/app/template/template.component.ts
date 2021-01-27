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
import { MockService } from './mock.service';
import { TemplateType } from './template-structure.type';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateComponent implements OnInit, AfterViewInit {

  @ViewChild('container', {static: false, read: ViewContainerRef}) container: ViewContainerRef;

  structure: TemplateType;

  constructor(private mockService: MockService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.structure = this.mockService.getTemplateStructure();
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
