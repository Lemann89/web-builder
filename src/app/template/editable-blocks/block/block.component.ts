import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver, ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { TemplateType } from '../../template-structure.type';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css'],
})
export class BlockComponent implements OnInit, AfterViewInit {

  @ViewChild('container', {static: false, read: ViewContainerRef}) container: ViewContainerRef;
  @ViewChild('actionsContainer', {static: false}) actionsContainer: ElementRef;

  structure: TemplateType;
  isMouseEnter = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.generateStructure();
  }

  generateStructure(): void {
    this.structure.childrenComponents.forEach(component => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.componentType);
      const componentRef = this.container.createComponent(componentFactory);
      componentRef.instance.structure = component;
    });
    this.changeDetectorRef.detectChanges();
  }

  showActions(event): void {
    event.stopPropagation();
    this.isMouseEnter = true;
  }

  toggleActions(event): void {
    event.stopPropagation();
    this.isMouseEnter = !this.isMouseEnter;
  }

  clickOnButton(): void {
    console.log('clicked');
  }
}
