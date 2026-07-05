import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { AddFolder } from '../add-folder/add-folder';

@Component({
  selector: 'app-add-button',
  imports: [AddFolder],
  template: `
    <section>
      <form>
        <button class="add-button" type="button" (click)="toggleForm()">
          Add folder to root
        </button>
      </form>
      @if (showAddFolderForm()) {
        <app-add-folder />
      }
    </section>
  `,
  styleUrl: './add-button.scss',
})
export class AddButton {
  showAddFolderForm = signal(false)

  toggleForm() {
    if (this.showAddFolderForm() === true) {
      this.showAddFolderForm.set(false)
    } else {
      this.showAddFolderForm.set(true)
    }
  }
}
