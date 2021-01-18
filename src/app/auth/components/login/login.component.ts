import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormFieldAppearance } from '@utils/enums/form-field-appearance.enum';
import { InputField } from '@utils/models/input-field.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  inputs: InputField[] = [
    {
      value: '',
      type: 'text',
      required: true,
      label: 'Nombre de usuario',
      formControlName: 'username',
      placeholder: 'Ingrese su nombre de usuario',
    },
    {
      value: '',
      required: true,
      type: 'password',
      label: 'Contraseña',
      formControlName: 'password',
      placeholder: 'Ingrese su contraseña',
    }
  ];
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

}
