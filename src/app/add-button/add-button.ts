import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { AddFolder } from '../add-folder/add-folder';
import { NodeModel, NodeType } from '../node/node.model';
import { Node } from "../node/node";

@Component({
  selector: 'app-add-button',
  imports: [AddFolder, Node],
  template: `
    <section>
      <button class="add-button" type="button" (click)="toggleForm(true)">
        Add folder to root
      </button>

      <ul class="folder-list">
        @for (node of rootFolder(); track node) {
          <li>
            <app-node [node]="node" />
          </li>
        } @empty {}
      </ul>

      @if (showAddFolderForm()) {
        <app-add-folder
          [rootFolder]="rootFolder()"
          (toggleForm)="toggleForm($event)"
          [formType]="folderType"
        />
      }
    </section>
  `,
  styleUrl: './add-button.scss',
})
export class AddButton {
  readonly folderType = NodeType.folder

  rootFolder = signal<NodeModel[]>([])

  showAddFolderForm = signal(false)

  formType = signal<NodeType>(NodeType.unset)

  toggleForm(value: boolean) {
    this.showAddFolderForm.set(value)
  }
}
