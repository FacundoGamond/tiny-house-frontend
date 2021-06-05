import { Component, OnInit } from '@angular/core';
declare const animation: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public slides: any;
  constructor() {
    this.slides = [
      { txt: "SOMOS NÓMADES DE LA VIDA, CONQUISTADORES." },
      { txt: "DE TODO ESPACIO HACEMOS UN HOGAR." },
      { txt: "SOMOS NÓMADES DE LA VIDA, CONQUISTADORES." },
      { txt: "TRANSPORTABLE" },
      { txt: "MODULABLE" },
      { txt: "CONFORTABLE" },
      { txt: "SUSTENTABLE" },
    ]
  }

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": false,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "fade": true,
    "cssEase": 'linear',
    "infinite": true,
    "adaptiveHeight": true

  };

  ngOnInit(): void {
  }

}
