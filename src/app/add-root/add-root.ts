import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { AddFsNode } from '../add-fs-node/add-fs-node';
import { NodeModel, NodeType } from '../node/node.model';
import { Node } from "../node/node";

@Component({
  selector: 'app-add-root',
  imports: [AddFsNode, Node],
  template: `
    <section>
      <button class="add-button" type="button" (click)="toggleForm(true)">
        Add folder to root
      </button>

      <ul class="node-list">
        @for (node of rootFolder(); track node) {
          <li>
            <app-node [node]="node" />
          </li>
        } @empty {}
      </ul>

      @if (showAddFsNodeForm()) {
        <app-add-fs-node
          [rootFolder]="rootFolder()"
          (toggleForm)="toggleForm($event)"
          [initType]="folderType"
        />
      }
    </section>
  `,
  styleUrl: './add-root.scss',
})
export class AddRoot {
  readonly folderType = NodeType.folder

  rootFolder = signal<NodeModel[]>([])

  showAddFsNodeForm = signal(false)

  initType = signal<NodeType>(NodeType.unset)

  toggleForm(value: boolean) {
    this.showAddFsNodeForm.set(value)
  }
}
