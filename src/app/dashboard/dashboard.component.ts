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

  moveRight(i, j) {
    const currentCard = this.stages[i].cards[j];
    const nextStage = this.stages[i + 1].cards;
    const stages = this.stages[i].cards;

    this.stages[i].cards = stages.filter((el) => el !== currentCard);
    nextStage.push(currentCard);
  }

  moveLeft(i, j) {
    const currentCard = this.stages[i].cards[j];
    const nextStage = this.stages[i - 1].cards;
    const stages = this.stages[i].cards;

    this.stages[i].cards = stages.filter((el) => el !== currentCard);
    nextStage.push(currentCard);
  }

  delete(i, j) {
    const currentCard = this.stages[i].cards[j];
    const stages = this.stages[i].cards;

    this.stages[i].cards = stages.filter((el) => el !== currentCard);
  }
}
