import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // nombre:string = 'Alexis Murillo';
  // edad:number;
  // direccion:{
  //   calle:string;
  //   ciudad:string;
  // };
  // hobbies:string[];

  // constructor() {
  //   this.edad = 20;
  //   this.direccion = {
  //     calle: '221 Baker Street',
  //     ciudad: 'Medellin'
  //   };
  //   this.hobbies = ['Leer', 'nadar','Jugar'];
  // }

  nombre:string = 'Alexis Murillo';
  edad:number = 20; 

  usuarios: string[]=['Alexis', 'Isa', 'Chabela'];

  decirHola() {
    alert('Hola gono');
  };

  AgregarUsuario(NuevoUser){
    this.usuarios.push(NuevoUser.value);
    NuevoUser.value= "";
    NuevoUser.focus();
    return false;
  };

  EliminarUsuario(usuario){
    for(let i=0; i<this.usuarios.length;i++){
      if(usuario==this.usuarios[i]){
        this.usuarios.splice(i, 1);
      }
    }
  }
}
