import { Component, OnInit, Input } from '@angular/core';
import { CarrosselImage, Imagem } from '../models';

@Component({
  selector: 'app-carrossel2',
  templateUrl: './carrossel2.component.html',
  styleUrls: ['./carrossel2.component.css']
})

export class Carrossel2Component implements OnInit {

  constructor() { }

  @Input() imagensLoad: Imagem[];

  imagemCorrente: CarrosselImage;
  images = [];
  imagesMiniatura = [];

  ngOnInit() {
      this.popularListaDeImagens();
  }

  popularListaDeImagens(){
    let i = 0;
    for (let imgLoad of this.imagensLoad) {
      this.images.push({ url: imgLoad.baseURL, id: imgLoad.id, index: i }); //Imagens vindo do parâmetro imagensLoad
      
      //As imagens miniaturas são determinadas com quatro imagens fixas que vão sendo trabalhadas pelas suas posições
      if (i <= 3) { 
        if (i == 0) {
          //Imagem corrente, é a imagem que vai aparecer no carrossel grande (imagem única, ativa)
          this.imagemCorrente = new CarrosselImage();
          this.imagemCorrente.url = imgLoad.baseURL;
          this.imagemCorrente.index = i;
          this.imagesMiniatura.push({ url: imgLoad.baseURL, id: imgLoad.id, index: i, status: true }); 
        } else {
          this.imagesMiniatura.push({ url: imgLoad.baseURL, id: imgLoad.id, index: i });
        }
      }
      i++;
    }
  }

  nxt(){
    //As imagens todas possui x números de posições 
    //As imagens mniaturas possuem 4 posições de 0 a 1 
    //Quando acionar o next, o que esse método faz é pegar a imagem da próxima posição e colocá-la a uma posição anterior da posição da miniatura
    //Exemplo: Na posição padrão imagensMiniatura está com images na posição 0, 1 ,2 e 3 
    //A primeira vez que  apertar next, as imagensMiniatura tera a sua posição 0 com a image na posição 0+1, ou seja, a partir de agora imagens Miniatura receberão imagens das posições 1, 2, 3, 4
    //E assim sucessivamente até que todas as imagens sejam passadas de uma por uma, independente de quantas imagens você tem

    let posicaoGlobal = 1;
    let posicaoLocal = 1;
    let i = 0;
    for(let imgMini of this.imagesMiniatura){
      if(imgMini.status){
         posicaoGlobal = imgMini.index;
         posicaoLocal = i;
      }
      i++;
    }
    if(posicaoGlobal <= this.images.length -1){
      for(let j = 1; j <= this.imagesMiniatura.length; j++){
        if(this.imagesMiniatura[j-1].status == true && posicaoLocal != 3){
          this.imagesMiniatura[j-1].status = false;
        }
      }
      if(posicaoLocal <= 2){
        this.imagesMiniatura[posicaoLocal + 1].status = true;
        this.imagemCorrente = this.imagesMiniatura[posicaoLocal + 1];
      }else{
        let ultimaImagemMini = this.imagesMiniatura[3];
        if(this.images.length > 4 && ultimaImagemMini.index < (this.images.length -1) ){
          let t = 0;
          for(let k = 4; k < this.images.length ; k++){
            this.imagesMiniatura[t] = this.images[this.imagesMiniatura[t].index + 1];
            this.imagesMiniatura[t].status = false;
            t++;
          }
         this.imagesMiniatura[3].status = true;
         this.imagemCorrente = this.imagesMiniatura[3];
        }else{
          //Essa parte faz com que, ao acabar de passar todas as imagens, comece da primeira novamente de forma circular.
          let aux = this.images.length > 4? 4: this.images.length -1;
          for(let k = 0; k < aux ; k++){
            this.imagesMiniatura[k] = this.images[k];
          }
          this.imagesMiniatura[0].status = true;
          this.imagemCorrente = this.imagesMiniatura[0];
        }
      }
    }
  }
  

  pre() {
    //As imagens anteriores funcionam na mesma lógica do next, porém voltando as imagens uma por uma
    let posicaoGlobal = 1;
    let posicaoLocal = 1;
    let i = 0;
    for(let imgMini of this.imagesMiniatura){
      if(imgMini.status){
         posicaoGlobal = imgMini.index;
         posicaoLocal = i;
      }
      i++;
    }
    if(posicaoGlobal > 0){
      for(let j = 1; j <= this.imagesMiniatura.length; j++){
        if(this.imagesMiniatura[j-1].status == true && posicaoLocal != 0){
          this.imagesMiniatura[j-1].status = false;
        }
      }
      if(posicaoLocal > 0 && posicaoLocal <= 3){
        this.imagesMiniatura[posicaoLocal - 1].status = true;
        this.imagemCorrente = this.imagesMiniatura[posicaoLocal - 1];
      }else{
        let ultimaImagemMini = this.imagesMiniatura[0];
        if(this.images.length > 4 && ultimaImagemMini.index < (this.images.length -1) ){
          let t = 0;
          for(let k = 4; k < this.images.length ; k++){
            this.imagesMiniatura[t] = this.images[this.imagesMiniatura[t].index - 1];
            this.imagesMiniatura[t].status = false;
            t++;
          }
         this.imagesMiniatura[0].status = true;
         this.imagemCorrente = this.imagesMiniatura[0];
        }else{
          
          let aux = this.images.length > 4? 4: this.images.length -1;
          for(let k = 0; k < aux ; k++){
            this.imagesMiniatura[k] = this.images[aux-1];
          }
          this.imagesMiniatura[0].status = true;
          this.imagemCorrente = this.imagesMiniatura[0];
        }
      }
    }
  }

  cliqueMiniatura(img: any){
    //Essa parte faz com que ao clicar em uma outra miniatura o status dela mude, 
    //fazendo com que a lógica do html faça ficar com opacidade diferente em sua propriedade css
    for(let imgMiniature of this.imagesMiniatura){
      imgMiniature.status = false;
    }

    this.imagemCorrente = img;
    this.imagemCorrente.status = true;
  }

}
