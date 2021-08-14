import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
  public slides: any;
  public arrows: any;
  constructor() { }

  ngOnInit(): void {
    this.slides = [
      {
        img: "../../../assets/building/1.jpeg",
        title: "Medidas",
        copy: "4,10 mts. Alto. 7 mts. Largo 2.60 mts. Ancho (Mismo tamaño que colectivo de dos pisos 22mt2)"
      },
      {
        img: "../../../assets/sustentability/insolation/1.jpeg",
        title: "Aislación Térmica",
        copy: "Su cobertura cuenta con doble aislación, tanto en paredes como en piso y techos. Además, gracias al doble laminado DVH de la puerta y las ventanas, la conservación de la temperatura ambiente es superior, proporcionando una excelente aislación térmica, acústica y un ahorro energético en la climatización de la vivienda."
      },
      {
        img: "../../../assets/sustentability/water-fix/1.jpeg",
        title: "Tratamiento de Aguas Residuales",
        copy: "Cuenta con dos tanques de 150 litros para aguas grises y negras, capacidad suficiente para conservar los residuos y hacer de ellos una correcta gestión."
      },
      {
        img: "../../../assets/sustentability/solar-panels/1.jpeg",
        title: "Paneles solares",
        copy: "Cuenta con paneles solares que permiten generar energía renovable para cubrir el funcionamiento eléctrico de la vivienda."
      }

    ]
  }

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": true,
    adaptiveHeight: true
  };

  nextSlide(){
    const nextSlide = $('.slick-next');
    nextSlide.click();
  }

  prevSlide(){
    const nextSlide = $('.slick-prev');
    nextSlide.click();
  }

}
