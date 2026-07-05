import { Component } from '@angular/core';
import { AddFolder } from '../add-folder/add-folder';

@Component({
  selector: 'app-add-button',
  imports: [AddFolder],
  templateUrl: './add-button.html',
  styleUrl: './add-button.scss',
})
export class AddButton { }
