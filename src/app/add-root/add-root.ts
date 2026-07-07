import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { AddFsNode } from '../add-fs-node/add-fs-node';
import { NodeModel, NodeType } from '../node/node.model';
import { Node } from "../node/node";

@Component({
  selector: 'app-add-root',
  imports: [AddFsNode, Node, JsonPipe],
  template: `
    <section>
      <button class="add-button" type="button" (click)="toggleForm(true)">
        Add folder to root
      </button>

      <!-- ToDo: Could this be refactored?
           This is very similar to what's in the node component. So could just call node. -->
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
    <pre>
      {{ this.rootFolder() | json }}
    </pre>
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
