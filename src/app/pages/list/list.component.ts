import { Component } from '@angular/core';
import { NoteModel } from '../../models/note.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  notes:NoteModel[] =[]
  constructor() {
    this.notes = [
      new NoteModel(1, 'A new note'),
      new NoteModel(2, 'mobile Class',new Date()),

    ]
  }
}
