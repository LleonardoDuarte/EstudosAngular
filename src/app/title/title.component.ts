import { Component, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() nome: string = '';

  constructor() {
    console.log(`constructor ${this.nome}`);
  }
  // OnChanges é utilizado sempre que acontece alguma mudança
  ngOnChanges(): void {
    console.log(`OnChange ${this.nome}`);
  }

  // O OnInit é onde o seu componente nasce, tudo que será executado nesta página deve estar nele.
  ngOnInit(): void {
    this.nome = this.nome + 'x';
    this.nome = `Olá ${this.nome}`;
  }
}
