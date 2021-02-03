import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent implements OnInit {

  faTimes = faTimes;
  onDestroy: () => void;

  constructor() {}

  ngOnInit(): void {}

  closeModal(): void {
    this.onDestroy();
  }

  stopPropagation($event: MouseEvent): void {
    $event.stopImmediatePropagation();
  }
}
