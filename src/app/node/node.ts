import { Component, input, signal } from '@angular/core';
import { NodeModel, NodeType } from './node.model';
import { AddFsNode } from "../add-fs-node/add-fs-node";

@Component({
  selector: 'app-node',
  imports: [AddFsNode],
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
      <!-- ToDo: Add delete button here, would this need the unique Id??? -->
    </div>

    @if (showAddFsNodeForm()) {
      <app-add-fs-node
        [rootFolder]="node()?.children"
        (toggleForm)="toggleForm($event)"
        [initType]="unsetType"
      />
    }

    <ul>
      @for (node of node()?.children; track node) {
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

  initType = input<NodeType>(NodeType.unset);

  showAddFsNodeForm = signal(false)

  toggleForm(value: boolean) {
    this.showAddFsNodeForm.set(value)
  }
}
