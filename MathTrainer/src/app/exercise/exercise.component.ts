import { Component } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {
  public inputValid = this.config.inputValid;
  public exercises: any;
  public resultInput: number[] = [];
  public validResult: boolean[] = [];
  public showResults: boolean = false;

  constructor(public config: ConfigurationService) {
  }

  public compareResults() {
    for (let i = 0; i < this.exercises.length; i++) {
      if (this.resultInput[i] === this.exercises[i].result) {
        this.validResult[i] = true;
      } else {
        this.validResult[i] = false;
      }
    }
    this.showResults = true;
  }

  public getExercises() {
    this.exercises = this.config.generateExercises();
  }
}
