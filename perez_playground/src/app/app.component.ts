import { Component } from '@angular/core';
import { MainComponent } from './layout/main/main.component';

@Component({
  selector: 'app-root',
  imports: [MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'perez_playground';
}
