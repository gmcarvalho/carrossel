import { Component } from '@angular/core';
import { Imagem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() {}

  title = 'app';
  
  images: Imagem[];
  imagem: Imagem;

  ngOnInit() {
    this.images = [];
    this.imagem = new Imagem();
    this.imagem.baseURL = 'https://praconversarcom.files.wordpress.com/2016/04/melhores-lugares-para-viajar-no-brasil-dicas-de-viagem.jpg';
    this.imagem.id = "1";
 
    this.images.push(this.imagem);

    this.imagem = new Imagem();
    this.imagem.baseURL = 'http://pacotesviagensbaratos.com/wp-content/uploads/2012/05/viagem-lugares-exoticos.jpg';
    this.imagem.id = "2";
 
    this.images.push(this.imagem);

    this.imagem = new Imagem();
    this.imagem.baseURL = 'https://cache.quantocustaviajar.com/blog/wp-content/uploads/2016/02/austria.jpg';
    this.imagem.id = "3";
 
    this.images.push(this.imagem);

    this.imagem = new Imagem();
    this.imagem.baseURL = 'https://gds.portal5g-media.com/contentFiles/image/2017/01/FEA/principal/53710_w840h0_1484247068viagem-de-carro.jpg';
    this.imagem.id = "4";
 
    this.images.push(this.imagem);

    this.imagem = new Imagem();
    this.imagem.baseURL = 'http://www.guiaviajar.com.br/wp-content/uploads/2016/08/viagem-brasil-bonito.jpg';
    this.imagem.id = "5";
 
    this.images.push(this.imagem);

    this.imagem = new Imagem();
    this.imagem.baseURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0HOQv8uhp5B2U-JWnstAFmau0UHXR7SlOAn4-Cy4SlezjRlW';
    this.imagem.id = "6";
 
    this.images.push(this.imagem);

    this.imagem = new Imagem();
    this.imagem.baseURL = 'https://gds.portal5g-media.com/contentFiles/image/2017/01/FEA/principal/53713_w840h0_1484313094rio-da-prata-hotel-urbano.jpg';
    this.imagem.id = "7";
 
    this.images.push(this.imagem);

    this.imagem = new Imagem();
    this.imagem.baseURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDDo7H8VAjaYkOagmB-6NBA4_dBmkgXQ_NoJlKU2JCo2KbF2zmg';
    this.imagem.id = "8";
 
    this.images.push(this.imagem);

    console.log(this.images);
    
  }

  

}
