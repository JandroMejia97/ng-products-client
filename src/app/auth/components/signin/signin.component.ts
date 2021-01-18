import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormFieldAppearance } from '@utils/enums/form-field-appearance.enum';
import { InputField } from '@utils/models/input-field.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  inputs: InputField[] = [
    {
      value: '',
      type: 'email',
      required: true,
      label: 'Correo electrónico',
      formControlName: 'email',
      placeholder: 'Ingrese un correo',
    },
    {
      value: '',
      type: 'text',
      required: true,
      label: 'Nombre de usuario',
      formControlName: 'username',
      placeholder: 'Ingrese un nombre de usuario',
    },
    {
      value: '',
      required: true,
      type: 'password',
      label: 'Contraseña',
      formControlName: 'password',
      placeholder: 'Ingrese una contraseña',
    }
  ];
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
