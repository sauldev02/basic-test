import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heavy-loaders-slow.component.html',
  styleUrl: './heavy-loaders-slow.component.css'
})
export class HeavyLoadersSlowComponent {

  @Input({required:true}) cssClass!:string; 


  constructor(){
    const start = Date.now();
    while(Date.now() - start<3000){}
  }

}

//Otro comentario pero con separacion de lineas en el commit
//Otro comentario de cambio para probar extendido desde la shell