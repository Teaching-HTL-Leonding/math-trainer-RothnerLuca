import { Component } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  public digitInput!: number;
  public questionInput!: number;
  public addCheckbox!: boolean;
  public subCheckbox!: boolean;
  public multCheckbox!: boolean;
  public divCheckbox!: boolean;
  public inputValid: boolean = false;
  public saved!: boolean;

  constructor(public config: ConfigurationService) {
    this.init();
  }

  private init() {
    this.digitInput = this.config.amountOfDigitsInANumber;
    this.questionInput = this.config.amountOfQuestions;
    this.addCheckbox = this.config.operators.add;
    this.subCheckbox = this.config.operators.sub;
    this.multCheckbox = this.config.operators.mult;
    this.divCheckbox = this.config.operators.div;
    this.inputValid = this.config.inputValid;
    this.saved = this.config.settingsSaved;
  }

  public updateConfig() {
    this.config.amountOfDigitsInANumber = this.digitInput;
    this.config.amountOfQuestions = this.questionInput;
    this.config.operators.add = this.addCheckbox;
    this.config.operators.sub = this.subCheckbox;
    this.config.operators.mult = this.multCheckbox;
    this.config.operators.div = this.divCheckbox;
    this.config.inputValid = this.inputValid;
    this.saved = this.config.settingsSaved = true;
  }

  public checkboxesValid(): boolean {
    if (this.addCheckbox || this.subCheckbox || this.multCheckbox || this.divCheckbox) {
      this.inputValid = true;
      return true;
    }
    this.inputValid = false;
    return false;
  }

  public onChange() {
    this.saved = false;
  }
}
