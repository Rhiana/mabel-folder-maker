import { Component, input } from '@angular/core';
import { NodeModel } from './node.model';

@Component({
  selector: 'app-node',
  imports: [],
  template: `
    <div>
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
          /* (click)="toggleForm(true)" */
        >
          <i class="bx bx-plus-big"></i>
        </button>
      }
    </div>
  `,
  styles: `
    div {
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      padding: 0.25rem;
      border: 1px solid transparent;
      &:hover {
        border-color: #000;
        .add-button {
          display: block;
          border-radius: 100%;
          margin-left: .25rem;
          i {
            margin-top: 2px;
          }
        }
      }
    }
    img {
      margin-right: .25rem;
    }
    .add-button {
      display: none;
    }
  `,
})
export class Node {
  node = input<NodeModel>();
}
