import { Component, input, output, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { NodeModel, NodeType } from '../node/node.model';

@Component({
  selector: 'app-add-folder',
  imports: [FormField],
  template: `
    <section>
      @if (this.folderModel().type === unsetType) {
        <div class="type-buttons">
          <button type="button" (click)="setNewFormType(folderType)">Folder</button>
          <button type="button" (click)="setNewFormType(fileType)">File</button>
        </div>
      }
      @else {
        <form class="add-folder-form">
          @if (this.folderModel().type === folderType) {
            <img src="assets/images/folder-open-regular.svg" alt="Folder" height="25px" width="25px" />
          }
          @if (this.folderModel().type === fileType) {
            <img src="assets/images/file-regular.svg" alt="File" height="25px" width="25px" />
          }
          <input
            type="text"
            aria-label="name"
            placeholder="Name"
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
    </section>
  `,
  styleUrl: './add-folder.scss',
})
export class AddFolder {
  readonly folderType = NodeType.folder

  readonly fileType = NodeType.file

  readonly unsetType = NodeType.unset

  rootFolder = input<NodeModel[]>();

  toggleForm = output<boolean>();

  initType = input<NodeType>(NodeType.unset);

  folderModel = signal<NodeModel>({
    type: NodeType.unset,
    name: '',
    children: [],
    id: '1'
  })

  folderForm = form(this.folderModel);

  ngOnInit() {
    if (this.initType() != NodeType.unset) {
      this.folderModel().type = this.initType()
    }
  }

  setNewFormType(newType: NodeType) {
    this.folderModel().type = newType
  }

  saveForm() {
    this.rootFolder()?.push(this.folderModel())
    this.toggleForm.emit(false)
  }

  cancelForm() {
    this.toggleForm.emit(false)
  }
}
