import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [{value: '', disabled: false}, [Validators.required, Validators.maxLength(10)]],
      email: [{value: '', disabled: false}, [Validators.required, Validators.email]],
      pais: [{value: 1, disabled: false}, [Validators.required]],
      aceptarTerminos: [{value: false, disabled: false}, [Validators.requiredTrue]],
      genero: [{value: 1, disabled: false}],
      descripcion: [{value: '', disabled: false}, [Validators.required]]
    });
  }

  guardar() {
    console.log(this.form);
    console.log(this.form.value);
    console.log(this.form.value.nombre);
    console.log(this.form.value.email);
    console.log(this.form.value.pais);
    console.log(this.form.value.aceptarTerminos);
    console.log(this.form.value.genero);
    console.log(this.form.value.descripcion);

    let perfil = {
      nombre:this.form.value.nombre,
      email:this.form.value.email,
      pais:this.form.value.pais
    }

    //Llamar al metodo del servicio y le envio el objeto perfil
  }

  get f(){
    return this.form.controls;
  }


}
