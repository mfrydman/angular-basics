// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //styleUrls: ['./listado.component.css']
})
// export class ListadoComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class ListadoComponent {
  heroes: string[] = ["Spiderman", "Thor", "Goku", "Hulk"];
  heroeBorrado: string = "";

  borrarHeroe() {
    //this.heroes.pop();
    this.heroeBorrado = this.heroes.shift() || "";
  }
}