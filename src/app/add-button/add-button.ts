import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { AddFolder } from '../add-folder/add-folder';
import { NodeModel } from '../node/node.model';

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

      <ul class="folder-list">
        @for (folder of rootFolder(); track folder) {
          <li>
            <div class="folder-list__item">
              <img src="assets/images/folder-open-regular.svg" alt="Folder" height="20px" width="20px" />
              <span>{{ folder.name }}</span>
            </div>
          </li>
        } @empty {
          <li>There are no folders.</li>
        }
      </ul>

      @if (showAddFolderForm()) {
        <app-add-folder [rootFolder]="rootFolder()" />
      }
    </section>
  `,
  styleUrl: './add-button.scss',
})
export class AddButton {
  rootFolder = signal<NodeModel[]>([])

  showAddFolderForm = signal(false)

  toggleForm() {
    if (this.showAddFolderForm() === true) {
      this.showAddFolderForm.set(false)
    } else {
      this.showAddFolderForm.set(true)
    }
  }
}
