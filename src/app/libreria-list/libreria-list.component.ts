import { Component, OnInit, NgModule } from '@angular/core';
import { Libro } from '../libro.model';
import { LibreriaService } from '../libreria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './libreria-list.component.html',
  styleUrls: ['./libreria-list.component.css']
})
export class LibreriaListComponent implements OnInit {

  libros:Libro[];
  libro:Libro = new Libro;

  constructor(
    private servicio : LibreriaService,
    private router : Router) { }

  ngOnInit(): void {
    this.servicio.getLibros().subscribe(data => {
      this.libros = data.map(e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Libro
        };
      }).sort(() => -1);
    });
  }

  create(){
    this.servicio.addLibro(this.libro);
  }

  delete(id:string){
    this.servicio.deleteLibro(id);
  }
  detail(id:string){
    this.router.navigate(['/details', id]); 
  }

}
