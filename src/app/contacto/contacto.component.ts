import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RatingModule, FormsModule],
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
}
