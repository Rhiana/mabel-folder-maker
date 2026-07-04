import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Folder } from './folder/folder';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Folder],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mabel-folder-maker');
}
