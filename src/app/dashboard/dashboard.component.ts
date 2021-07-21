import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stage } from '../models/stage.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public stages: Stage[] = [
    {
      id: 1,
      name: 'Backlog',
      cards: [1, 2, 3],
    },
    {
      id: 2,
      name: 'To Do',
      cards: ['asda', 'dasdasdasdasd'],
    },
    {
      id: 3,
      name: 'Ongoing',
      cards: ['asdasddwq'],
    },
    {
      id: 4,
      name: 'Done',
      cards: ['mukdlas'],
    },
  ];
  public taskCreatorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskCreatorForm = this.fb.group({
      task: ['', [Validators.required]],
    });
  }

  addTask() {
    if (this.taskCreatorForm.valid) {
      this.stages[0].cards.push(this.taskCreatorForm.get('task').value);
      this.taskCreatorForm.reset();
    } else {
      this.taskCreatorForm.markAllAsTouched();
    }
  }
}
