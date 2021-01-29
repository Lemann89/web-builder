import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string;
  @Input() theme: string;

  @Output() appButtonClickEvent = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.appButtonClickEvent.emit();
  }
}
