import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver, ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { TemplateType } from '../../template.models';
import { TemplateService } from '../../services/template.service';
import { faPlus, faCog, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NewBlockDialogComponent } from '../../components/new-block-dialog/new-block-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BlockService } from '../../services/block.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent implements OnInit, AfterViewInit {

  @ViewChild('structureContainer', {static: false, read: ViewContainerRef}) structureContainer: ViewContainerRef;
  @ViewChild('actionsContainer', {static: false}) actionsContainer: ElementRef;

  structure: TemplateType;
  sidenav: any;
  isMouseEnter = false;
  faPlus = faPlus;
  faCog = faCog;
  faTrash = faTrash;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private changeDetectorRef: ChangeDetectorRef,
              private templateService: TemplateService,
              private blockService: BlockService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

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
    this.templateService.blockSettingsSubject.next(this.structure);
  }

  openNewBlockModal(): void {
    const dialogRef = this.dialog.open(NewBlockDialogComponent, {
      data: {
        blockId: this.structure.id
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteBlock(): void {
    this.blockService.delete(this.structure.id).subscribe(res => {
      this.templateService.getAllBlocksSubject.next(res);
    });
  }
}
