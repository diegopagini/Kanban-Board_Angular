import { Component, OnInit } from '@angular/core';
import { Stage } from '../models/stage.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public stages: Stage[] = [
    {
      id: 1,
      name: 'Backlog',
      cards: [],
    },
    {
      id: 2,
      name: 'To Do',
      cards: [],
    },
    {
      id: 3,
      name: 'Ongoing',
      cards: [],
    },
    {
      id: 4,
      name: 'Done',
      cards: [],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
