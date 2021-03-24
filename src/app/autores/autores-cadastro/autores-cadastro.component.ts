import { Autor } from '../autor.model';
import { AutorService } from '../autor.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Genero } from '../genero.enum';

@Component({
  selector: 'app-autores-cadastro',
  templateUrl: './autores-cadastro.component.html',
  styleUrls: ['./autores-cadastro.component.scss'],
})
export class AutoresCadastroComponent implements OnInit {

  autor: Autor;
  mesesAbreviados = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  meses= [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private autorService : AutorService,
  ) {
    const id =parseInt( this.ActivatedRoute.snapshot.paramMap.get('id'));
    if(id){
      this.autor =this.autorService.getAutor(id);
    }else{
      this.autor ={
        id:null,
        nome:'',
        dataNascimento: null,
        genero: Genero.FEMININO

      }
    }
   }

  ngOnInit() {}

}
