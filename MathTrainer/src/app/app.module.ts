import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { FormsModule } from '@angular/forms';
import { OperatorStringToSignPipe } from './operator-string-to-sign.pipe';
import { BooleanResultToStringPipe } from './boolean-result-to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    ExerciseComponent,
    OperatorStringToSignPipe,
    BooleanResultToStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
