import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  constructor(){
  }
  mostrarAlerta() {
    Swal.fire({
      title: '¡Gracias por tu comentario!',
      text: 'Te contestaremos a la brevedad.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }
}
