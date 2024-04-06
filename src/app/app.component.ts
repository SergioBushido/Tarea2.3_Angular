import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora';
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;

  sumar():void{
    this.resultado=this.numero1+this.numero2;


    //otras maneras
    //this.resultado=+this.numero1+ +this.numero2; //se agrega + para evitar concatenacion de strings si en el 
    //formulario el input type="text"
    //this.resultado=parseInt(this.numero1)+parseInt(this.numero2);
    //habria que poner los nuemeros declarados como strings
  }

  restar(){
    this.resultado=this.numero1-this.numero2;
  }
}
