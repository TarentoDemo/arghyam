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
  showResult:boolean = false;
  states = ['Maharashtra', 'Kerala',
            'Tamil Nadu'];
  
  profileForm = this.fb.group({
    name: ['', Validators.required],
    state: ['']
  });

 

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    this.showResult=true;
    console.warn(this.profileForm.value);
  }
}
