import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { AutomovilComponent } from './automovil/automovil.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, CardComponent, CarouselComponent, AutomovilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CarsForCracks';
  tarjetas = [
    {
      titulo: 'Misión',
      descripcion: 'Ofrecer a nuestros clientes una experiencia de alquiler de autos conveniente, segura y sin complicaciones, brindando una amplia gama de vehículos de calidad y un servicio excepcional que satisfaga y supere sus expectativas.',
      imagen: 'assets/img/mision.jpg',
    },
    {
      titulo: 'Visión',
      descripcion: 'Convertirnos en el proveedor líder de alquiler de autos a nivel regional, reconocido por nuestra excelencia en servicio al cliente, innovación tecnológica y compromiso con la sostenibilidad ambiental.',
      imagen: 'assets/img/vision.webp',
    },
    {
      titulo: 'Objetivo',
      descripcion: 'Proporcionar a nuestros clientes una solución integral para sus necesidades de transporte, ofreciendo una flota diversa de vehículos bien mantenidos, precios competitivos, procesos de reserva sencillos y una atención al cliente excepcional, con el fin de ser la opción preferida para el alquiler de autos en nuestra área de operaciones.',
      imagen: "assets/img/objetivo.jpg",
    }
  ];

  constructor() { }
}