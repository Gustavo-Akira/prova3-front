import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'labbd';
  events: string[] = [];
  opened: boolean = false;

  ngOnInit(): void {
  }
}
