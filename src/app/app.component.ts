import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UniRider';
  options = [
    { path: 'unirider/home', title: 'Home'},
    {path: 'unirider/plans',title: 'Plans'},
    {path: 'unirider/maps', title: 'Maps'}
  ]
}
