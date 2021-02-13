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
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateComponent implements OnInit, AfterViewInit {

  @ViewChild('structureContainer', {static: false, read: ViewContainerRef}) structureContainer: ViewContainerRef;
  @ViewChild('sidenav', {static: false}) sidenav: any;

  structure: TemplateType;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private changeDetectorRef: ChangeDetectorRef,
              private templateService: TemplateService,
              private block: BlockService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.templateService.blockSettingsSubject.subscribe(_ => {
      this.sidenav.toggle();
    });

    this.templateService.getAllBlocksSubject.subscribe((_) => {
      this.block.getAll().subscribe(res => {
        this.structure = res;
        this.structureContainer.clear();
        this.generateBlockStructure();
      });
    });
  }

  async ngAfterViewInit(): Promise<void> {
    this.structure = await this.block.getAll().toPromise();
    this.generateBlockStructure();
  }

  generateBlockStructure(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.structure.blockType);
    const componentRef = this.structureContainer.createComponent(componentFactory);
    componentRef.instance.structure = this.structure;
    this.changeDetectorRef.detectChanges();
  }
}
