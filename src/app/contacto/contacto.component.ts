import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RatingModule, FormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  constructor(){
  }

  value!:number;

  mostrarAlerta() {
    Swal.fire({
      title: '¡Gracias por tu comentario!',
      text: 'Te contestaremos a la brevedad.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }
  principal={
    'width.px': '100%',
    'margin': 'auto',
    'padding-top': '100px',
    color: 'rgb(255, 255, 255)',
    'font-weight': 'bold',
    'padding-left': '50%',
    'padding-right': '10%',
    'padding-bottom': '100px',
    'text-align': 'center',
    'font-size': '20px',
    'background-image': 'url(../../assets/img/fondoContact.jpg)',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover',
}
imagen={
  'position': 'absolute', 
  'top': '200px',
  'left': '400px',
  'height': 'auto',
}
formulario={
  'position': 'relative',
  'width': '100%',
  'margin': 'auto',
  'padding-top': '100px',
  'padding-bottom': '100px',
  'padding-left': '20%',
  'padding-right': '20%',
  'font-size': '55px',
  'color': 'rgb(0, 0, 0)',
  'font-weight': 'bold',
  'background-color': 'lightgray',
}
imgPerf={
  'width': '200px',
  'height': '200px',
}
nosotros={
  'padding-top': '30px',
  'align-items': 'center',
  display: 'flex',
  'flex-wrap': 'wrap',
  'justify-content': 'center',
}
h5={
  'padding-top': '30px',
}
titulo={
  'margin': 'auto',
  'text-align': 'center',
  'padding-top': '100px',
  'width': '70%',
  'font-size': '30px',
}
persona={
  'padding-bottom': '50px',
  'margin-right': '50px', 
  'margin-bottom': '50px',
  'text-align': 'center', 
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
}
}
