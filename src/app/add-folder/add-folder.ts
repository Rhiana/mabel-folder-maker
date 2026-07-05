import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { NodeModel } from '../node/node.model';

@Component({
  selector: 'app-add-folder',
  imports: [FormField],
  template: `
    <section>
      @if (showFolderForm()) {
        <form class="add-folder-form">
          <img src="assets/images/folder-open-regular.svg" alt="" height="25px" width="25px" />
          <input
            type="text"
            aria-label="Folder name"
            placeholder="Folder name"
            [formField]="folderForm.name"
          />
          <button
            class="add-button"
            type="button"
            aria-label="Save"
            (click)="saveForm()"
          >
            <i class="bx bx-check"></i>
          </button>
          <button
            class="cancel-button"
            type="button"
            aria-label="Cancel"
            (click)="cancelForm()"
          >
            <i class="bx bx-x"></i>
          </button>
        </form>
      }
      @if (showFormName()) {
        <ul class="folder-list">
          <li>
            <div class="folder-list__item">
              <img src="assets/images/folder-open-regular.svg" alt="Folder" height="20px" width="20px" />
              <span>{{ folderForm.name().value() }}</span>
            </div>
          </li>
        </ul>
      }
    </section>
  `,
  styleUrl: './add-folder.scss',
})
export class AddFolder {
  folderModel = signal<NodeModel>({
    type: 'folder',
    name: '',
    children: [],
    id: '1'
  })

  folderForm = form(this.folderModel);

  showFormName = signal(false)
  showFolderForm = signal(true)

  saveForm() {
    this.showFormName.set(true)
    this.showFolderForm.set(false)
  }

  cancelForm() {
    this.showFolderForm.set(false)
  }
}
