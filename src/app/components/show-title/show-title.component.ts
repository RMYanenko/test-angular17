import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-title',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './show-title.component.html',
  styleUrl: './show-title.component.scss',
})
export class ShowTitleComponent implements OnInit {
  @Input() incomingTitle!: string;

  @Output('outputTitle') outputTitle: EventEmitter<string> = new EventEmitter<string>();

  changedTitle!: string;

  ngOnInit() {
    console.log('ngOnInit', this.incomingTitle);
  }

  sendTitle() {
    this.outputTitle.emit(this.changedTitle);
  }
}
