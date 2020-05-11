import { Component, HostBinding, OnInit } from '@angular/core';
import { fadeStateTrigger } from "../../shared/animations/fade.animations";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'jz-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeStateTrigger]
})
export class ContactComponent implements OnInit {
  @HostBinding('@fade') a = true;

  form:FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'comment': new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit() {
    const controls = this.form.controls;

    if (this.form.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    console.log(this.form.value);
    console.log(location.origin);
    this.http.post(location.origin+'/mail.php', this.form.value);

  }
}
