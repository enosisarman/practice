import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  applianceTypes = [1, 2, 3, 4, 5, 6, 7];
  appliances = [1, 2, 3, 4, 5];
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  onKeydown() {
    return false;
  }
  demomethod() {
    console.log("hello")
  }
}
