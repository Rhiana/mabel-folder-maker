import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { AddFolder } from '../add-folder/add-folder';
import { NodeModel } from '../node/node.model';
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
        } @empty {
          <li>There are no folders.</li>
        }
      </ul>

      @if (showAddFolderForm()) {
        <app-add-folder
          [rootFolder]="rootFolder()"
          (toggleForm)="toggleForm($event)"

        />
      }
    </section>
  `,
  styleUrl: './add-button.scss',
})
export class AddButton {
  rootFolder = signal<NodeModel[]>([])

  showAddFolderForm = signal(false)

  toggleForm(value: boolean) {
    this.showAddFolderForm.set(value)
  }
}
