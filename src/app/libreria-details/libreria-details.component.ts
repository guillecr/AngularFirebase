import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { Libro } from '../libro.model';
import { LibreriaService } from '../libreria.service';

@Component({
  selector: 'app-libreria-details',
  templateUrl: './libreria-details.component.html',
  styleUrls: ['./libreria-details.component.css']
})
export class LibreriaDetailsComponent implements OnInit {

  private idLibro : string = "";
  public libro : Libro = new Libro();
  
  constructor(
    private ActRoute : ActivatedRoute,
    private router : Router,
    private servicio : LibreriaService
  ) { }
  
  ngOnInit(): void {
    this.idLibro = this.ActRoute.snapshot.paramMap.get('id');

    this.servicio.getLibroID(this.idLibro).subscribe((lib) => {
      this.libro = lib.payload.data() as Libro;
      this.libro.id = this.idLibro;
    });
  }

  update(): void{
    this.servicio.updateLibro(this.libro);
    this.atras();
  }

  atras():void{
    this.router.navigate(['/']);
  }
}
