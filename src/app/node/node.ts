import { Component, input, signal } from '@angular/core';
import { NodeModel } from './node.model';
import { AddFolder } from "../add-folder/add-folder";

@Component({
  selector: 'app-node',
  imports: [AddFolder],
  template: `
    <div class="node-item">
      @if (node()?.type === 'folder') {
        <img src="assets/images/folder-open-regular.svg" alt="Folder" height="20px" width="20px" />
      }
      @if (node()?.type === 'file') {
        <img src="assets/images/file-regular.svg" alt="File" height="20px" width="20px" />
      }
      <span>{{ node()?.name }}</span>
      @if (node()?.type === 'folder') {
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
  node = input<NodeModel>();

  childFolder = signal<NodeModel[]>([])

  showAddFolderForm = signal(false)

  toggleForm(value: boolean) {
    this.showAddFolderForm.set(value)
  }
}
