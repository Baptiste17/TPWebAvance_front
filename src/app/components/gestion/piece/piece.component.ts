import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-piece',
  imports: [
    NgClass
  ],
  templateUrl: './piece.component.html',
  standalone: true,
  styleUrl: './piece.component.css'
})
export class PieceComponent {
  @Input() name: string = "";
  @Output() change: EventEmitter<void> = new EventEmitter();
  @Output() delete: EventEmitter<void> = new EventEmitter();
}

