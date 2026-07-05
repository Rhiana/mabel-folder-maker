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
      <form>
        <button class="add-button" type="button" (click)="toggleForm()">
          Add folder to root
        </button>
      </form>

      <ul class="folder-list">
        @for (folder of rootFolder(); track folder) {
          <li>
            <app-node [folder]="folder" />
          </li>
        } @empty {
          <li>There are no folders.</li>
        }
      </ul>

      @if (showAddFolderForm()) {
        <app-add-folder [rootFolder]="rootFolder()" />
      }
    </section>
  `,
  styleUrl: './add-button.scss',
})
export class AddButton {
  rootFolder = signal<NodeModel[]>([])

  showAddFolderForm = signal(false)

  toggleForm() {
    if (this.showAddFolderForm() === true) {
      this.showAddFolderForm.set(false)
    } else {
      this.showAddFolderForm.set(true)
    }
  }
}
