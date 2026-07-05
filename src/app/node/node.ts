import { Component, input } from '@angular/core';
import { NodeModel } from './node.model';

@Component({
  selector: 'app-node',
  imports: [],
  template: `
    <img src="assets/images/folder-open-regular.svg" alt="Folder" height="20px" width="20px" />
    <span>{{ folder()?.name }}</span>
  `,
  styleUrl: './node.scss',
})
export class Node {
  folder = input<NodeModel>();
}
