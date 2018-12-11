import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  showResult: boolean = false;
  profileForm;
  formObject = {};
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

  ngOnInit(){
    this.flexiConfig.items.forEach((el) => {
      this.formObject[el.name] = ['', Validators.required];
    });
    this.profileForm = this.fb.group(this.formObject);
  }
  
  constructor(private fb: FormBuilder) { }

  onSubmit() {
    this.showResult = true;
    // console.warn(this.profileForm.value);
  }
}
