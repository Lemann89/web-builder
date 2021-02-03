import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver, ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { IEditableBlock, TemplateType } from '../../template.models';
import { TemplateService } from '../../services/template.service';
import { faPlus, faCog, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EditPanelComponent } from '../../blocks/edit-panel/edit-panel.component';
import { CreateModalComponent } from '../../blocks/create-modal/create-modal.component';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent implements OnInit, AfterViewInit {

  @ViewChild('structureContainer', {static: false, read: ViewContainerRef}) structureContainer: ViewContainerRef;
  @ViewChild('actionsContainer', {static: false}) actionsContainer: ElementRef;

  structure: TemplateType;
  isMouseEnter = false;
  faPlus = faPlus;
  faCog = faCog;
  faTrash = faTrash;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private changeDetectorRef: ChangeDetectorRef,
              private templateService: TemplateService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.generateStructure();
  }

  generateStructure(): void {
    this.structure.childrenBlocks.forEach(component => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.blockType);
      const componentRef = this.structureContainer.createComponent(componentFactory);
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

  openSettings(): void {
    const editableBlock: IEditableBlock = (({childrenBlocks, ...other}) => other)(this.structure);
    this.templateService.blockActionsSubject.next({component: EditPanelComponent, data: editableBlock.data});
  }

  openCreateModal(): void {
    this.templateService.blockActionsSubject.next({component: CreateModalComponent});
  }

  deleteBlock(): void {}
}
