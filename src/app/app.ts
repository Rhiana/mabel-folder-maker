import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddButton } from './add-button/add-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mabel-folder-maker');
}
