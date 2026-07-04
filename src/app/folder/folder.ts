import { Component } from '@angular/core';
import { AddFolder } from '../add-folder/add-folder';

@Component({
  selector: 'app-folder',
  imports: [AddFolder],
  templateUrl: './folder.html',
  styleUrl: './folder.scss',
})
export class Folder { }
