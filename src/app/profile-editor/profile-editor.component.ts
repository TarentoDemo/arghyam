import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';



@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  showResult: boolean = false;
  flexiConfig = {
    "items": [
      {
        "name": "personname",
        "label": "Person's Name",
        "type": "TextField"
      },
      {
        "name": "states",
        "label": "Person's state",
        "type": "DropDown",
        "values": [
          "Maharashtra",
          "Kerala",
          "Tamil Nadu"
        ]
      }
    ]
  }


  profileForm = this.fb.group({
    personname: ['', Validators.required],
    states: ['']
  });



  constructor(private fb: FormBuilder) { }

  onSubmit() {
    this.showResult = true;
    // console.warn(this.profileForm.value);
  }
}
