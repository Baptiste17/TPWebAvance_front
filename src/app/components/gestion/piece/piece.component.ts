import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-piece',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './piece.component.html',
  standalone: true,
  styleUrl: './piece.component.css'
})
export class PieceComponent {
  isEditing = false;

  onNameChange(){
    this.isEditing = false;
    this.change.emit(this.piece);
    console.log('AddObjectComponent name input:', this.piece);
  }
  @Input() piece!: string;
  @Output() change: EventEmitter<string> = new EventEmitter();
  @Output() delete: EventEmitter<void> = new EventEmitter();
}

