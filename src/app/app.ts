import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddRoot } from './add-root/add-root';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddRoot],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mabel-folder-maker');
}
