import { Component, input, output, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { NodeModel, NodeType } from '../node/node.model';

@Component({
  selector: 'app-add-folder',
  imports: [FormField],
  template: `
    <section>
      <form class="add-folder-form">
        @if (this.formType() === folderType) {
          <img src="assets/images/folder-open-regular.svg" alt="" height="25px" width="25px" />
        }
        @if (this.formType() === fileType) {
          <img src="assets/images/file-regular.svg" alt="" height="25px" width="25px" />
        }
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
    </section>
  `,
  styleUrl: './add-folder.scss',
})
export class AddFolder {
  readonly folderType = NodeType.folder

  readonly fileType = NodeType.file

  rootFolder = input<NodeModel[]>();

  toggleForm = output<boolean>();

  formType = input<NodeType>(NodeType.unset);

  folderModel = signal<NodeModel>({
    type: this.formType(),
    name: '',
    children: [],
    id: '1'
  })

  folderForm = form(this.folderModel);

  saveForm() {
    this.folderModel().type = this.formType()
    this.rootFolder()?.push(this.folderModel())
    this.toggleForm.emit(false)
  }

  cancelForm() {
    this.toggleForm.emit(false)
  }
}
