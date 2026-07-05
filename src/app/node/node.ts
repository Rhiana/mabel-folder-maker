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
      <span>{{ node()?.name }}</span>
    </div>
  `,
  styles: `
    div {
      display: inline-flex;
      flex-direction: row;
      align-items: center;
    }
    img {
      margin-right: .25rem;
    }
  `,
})
export class Node {
  node = input<NodeModel>();
}
