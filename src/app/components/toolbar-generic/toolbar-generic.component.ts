import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar-generic',
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule
  ],
  standalone: true,
  templateUrl: './toolbar-generic.component.html',
  styleUrl: './toolbar-generic.component.scss'
})
export class ToolbarGenericComponent {
  @Input() title: string = ''; 

}
