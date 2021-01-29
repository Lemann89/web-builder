import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.scss']
})
export class EditPanelComponent implements OnInit {

  @Output() isClosed = new EventEmitter<boolean>();
  @Input() blockData;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.blockData);
  }

  closeEditPanel(): void {
    this.isClosed.emit(true);
    this.blockData.style = 'red-500';
  }

  changeBlockDirectionToRow(): void {
    this.blockData.blockDirection = 'row';
  }

  changeBlockDirectionToColumn(): void {
    this.blockData.blockDirection = 'column';
  }
}
