import { Injectable } from '@angular/core';

export class Exercise {
  constructor(public numA: number,
    public numB: number,
    public operator: string,
    public result: number) {  }
}

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  public amountOfDigitsInANumber!: number;
  public amountOfQuestions!: number;
  public operators = {
    add: true,
    sub: true,
    mult: true,
    div: true,
  };
  public inputValid: boolean = true;
  private operatorNames = ['add', 'sub', 'mult', 'div'];
  private ex: Exercise[] = [];
  public settingsSaved: boolean = true;

  constructor() {
    this.amountOfDigitsInANumber = 1;
    this.amountOfQuestions = 10;
  }

  public generateExercises(): Exercise[] {
    let exercises: Exercise[] = [];
    let currOp: string;
    let numA: number;
    let numB: number;

    while(exercises.length < this.amountOfQuestions) {
      currOp = this.operatorNames[Math.floor(Math.random() * this.operatorNames.length)];
      numA = this.getRandom();
      numB = this.getRandom();
      let temp = 0;
      if (currOp === 'add' && this.operators.add) {
        exercises.push(new Exercise(numA, numB, currOp, numA+numB));
      } else if (currOp === 'sub' && this.operators.sub) {
        if (numA < numB) {
          temp = numA;
          numA = numB;
          numB = temp;
        }
        exercises.push(new Exercise(numA, numB, currOp, numA-numB));
      }
      else if (currOp === 'mult' && this.operators.mult) {
        exercises.push(new Exercise(numA, numB, currOp, numA*numB));
      } else if (currOp === 'div' && this.operators.div) {
        if (numA<numB) {
          temp = numA;
          numA = numB;
          numB = temp;
        }
        if (numA % numB === 0) {
          exercises.push(new Exercise(numA, numB, currOp, numA/numB));
        }
      }
    }
    this.ex = exercises;
    return exercises;
  }

  public getResults(): number[] {
    let res = [];
    for(let i = 0; i < this.amountOfQuestions; i++) {
      res.push(this.ex[i].result);
    }
    return res;
  }

  private getRandom(): number {
    return Math.floor(Math.random() * (10 ** this.amountOfDigitsInANumber));
  }
}
