import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.scss']
})
export class EditPanelComponent implements OnInit {

  blockData;
  onDestroy: () => void;

  constructor() {}

  ngOnInit(): void {
    console.log(this.blockData);
  }

  closeEditPanel(): void {
    this.onDestroy();
  }

  changeBlockDirectionToRow(): void {
    this.blockData.blockDirection = 'row';
  }

  changeBlockDirectionToColumn(): void {
    this.blockData.blockDirection = 'column';
  }
}
