import { Component, input, output, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { NodeModel, NodeType } from '../node/node.model';

@Component({
  selector: 'app-add-fs-node',
  imports: [FormField],
  template: `
    <section>
      @if (this.nodeModel().type === unsetType) {
        <div class="type-buttons">
          <button type="button" (click)="setNewModelType(folderType)">Folder</button>
          <button type="button" (click)="setNewModelType(fileType)">File</button>
        </div>
      }
      @else {
        <form class="add-fs-form">
          @if (this.nodeModel().type === folderType) {
            <img src="assets/images/folder-open-regular.svg" alt="Folder" height="25px" width="25px" />
          }
          @if (this.nodeModel().type === fileType) {
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
  styleUrl: './add-fs-node.scss',
})
export class AddFsNode {
  readonly folderType = NodeType.folder

  readonly fileType = NodeType.file

  readonly unsetType = NodeType.unset

  rootFolder = input<NodeModel[]>();

  toggleForm = output<boolean>();

  initType = input<NodeType>(NodeType.unset);

  nodeModel = signal<NodeModel>({
    type: NodeType.unset,
    name: '',
    children: [],
    id: '1'
  })

  folderForm = form(this.nodeModel);

  ngOnInit() {
    if (this.initType() != NodeType.unset) {
      this.nodeModel().type = this.initType()
    }
  }

  setNewModelType(newType: NodeType) {
    this.nodeModel().type = newType
  }

  saveForm() {
    this.rootFolder()?.push(this.nodeModel())
    this.toggleForm.emit(false)
  }

  cancelForm() {
    this.toggleForm.emit(false)
  }
}
