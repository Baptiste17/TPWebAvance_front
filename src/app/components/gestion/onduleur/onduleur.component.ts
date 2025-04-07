import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-onduleur',
  imports: [NgClass],
  templateUrl: './onduleur.component.html',
  styleUrl: './onduleur.component.css'
})
export class OnduleurComponent {
  @Input() name: string = "";
  @Input() power: Number = 0;
  @Input() state: boolean = false;
  @Output() change: EventEmitter<void> = new EventEmitter();
  @Output() delete: EventEmitter<void> = new EventEmitter();
}
