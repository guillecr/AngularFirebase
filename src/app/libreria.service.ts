import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Libro } from './libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {

  private coleccion = 'libreria';

  constructor(private firestore : AngularFirestore) { }

  getLibros(){
    return this.firestore.collection(this.coleccion).snapshotChanges();
  }
  getLibroID(idLibro : string){
    console.log("GET -> " + idLibro);
    let libro = this.firestore.collection(this.coleccion).doc(idLibro);
    return libro;
  }
  addLibro(libro : Libro){
    console.log("ADD -> " + libro);
    return this.firestore.collection(this.coleccion).add({...libro});
  }
  updateLibro(libro : Libro){
    console.log("UPDATE -> " + libro.id);
    return this.firestore.doc(this.coleccion+"/"+libro.id).update(libro);
  }
  deleteLibro(idLibro : string){
    console.log("DELETE -> " + idLibro);
    return this.firestore.doc(this.coleccion+"/"+idLibro).delete();
  }

}
