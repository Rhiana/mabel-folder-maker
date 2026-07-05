import { Component, input, signal } from '@angular/core';
import { NodeModel, NodeType } from './node.model';
import { AddFolder } from "../add-folder/add-folder";

@Component({
  selector: 'app-node',
  imports: [AddFolder],
  template: `
    <div class="node-item">
      @if (node()?.type === folderType) {
        <img src="assets/images/folder-open-regular.svg" alt="Folder" height="20px" width="20px" />
      }
      @if (node()?.type === fileType) {
        <img src="assets/images/file-regular.svg" alt="File" height="20px" width="20px" />
      }
      <span>{{ node()?.name }}</span>
      @if (node()?.type === folderType) {
        <button
          class="add-button"
          type="button"
          aria-label="Add new"
          (click)="toggleForm(true)"
        >
          <i class="bx bx-plus-big"></i>
        </button>
      }
    </div>

    @if (showAddFolderForm()) {
      <app-add-folder
        [rootFolder]="childFolder()"
        (toggleForm)="toggleForm($event)"
        [initType]="unsetType"
      />
    }

    <ul>
      @for (node of childFolder(); track node) {
        <li>
          <app-node [node]="node" />
        </li>
      } @empty {}
    </ul>
  `,
  styleUrl: './node.scss',
})
export class Node {
  readonly folderType = NodeType.folder

  readonly fileType = NodeType.file

  readonly unsetType = NodeType.unset

  node = input<NodeModel>();

  childFolder = signal<NodeModel[]>([])

  initType = input<NodeType>(NodeType.unset);

  showAddFolderForm = signal(false)

  toggleForm(value: boolean) {
    this.showAddFolderForm.set(value)
  }
}
