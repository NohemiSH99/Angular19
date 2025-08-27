import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { TaskListComponent } from "./components/task-list/task-list.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatTableModule,
    TaskListComponent
],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular19-app';
}
