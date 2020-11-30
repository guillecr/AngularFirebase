import { Component, OnInit, NgModule } from '@angular/core';
import { Libro } from '../libro.model';
import { LibreriaService } from '../libreria.service';

@Component({
  selector: 'app-libreria-add',
  templateUrl: './libreria-add.component.html',
  styleUrls: ['./libreria-add.component.css']
})
export class LibreriaAddComponent implements OnInit {

  libro:Libro = new Libro;

  constructor(private servicio : LibreriaService) { }

  ngOnInit(): void {
  }

  create(){
    this.servicio.addLibro(this.libro);
  }

}