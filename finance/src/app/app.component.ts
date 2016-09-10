import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard'
import { MainComponent } from './main'


@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [DashboardComponent, MainComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
