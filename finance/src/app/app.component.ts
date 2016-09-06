import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [DashboardComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
