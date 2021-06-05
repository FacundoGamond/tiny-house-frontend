import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sustentability',
  templateUrl: './sustentability.component.html',
  styleUrls: ['./sustentability.component.scss']
})
export class SustentabilityComponent implements OnInit {
  public slides: any;

  constructor() {
    this.slides=[
      {
        img: "../../../assets/sustentability/1.svg",
        title: "Ahorro Energético",
        copy: "Equipada con artefactos eléctricos A+ (de eficiencia energética) e iluminación LED, proporcionando un importante ahorro a nivel energético y económico."
      },
      {
        img: "../../../assets/sustentability/2.svg",
        title: "Aislación Térmica",
        copy: "Su cobertura cuenta con doble aislación, tanto en paredes como en piso y techos. Además, gracias al doble laminado DVH de la puerta y las ventanas, la conservación de la temperatura ambiente es superior, proporcionando una excelente aislación térmica, acústica y un ahorro energético en la climatización de la vivienda."
      },
      {
        img: "../../../assets/sustentability/3.svg",
        title: "Tratamiento de Aguas Residuales",
        copy: "Cuenta con dos tanques de 150 litros para aguas grises y negras, capacidad suficiente para conservar los residuos y hacer de ellos una correcta gestión."
      },
      {
        img: "../../../assets/sustentability/4.svg",
        title: "Paneles solares",
        copy: "Cuenta con paneles solares que permiten generar energía renovable para cubrir el funcionamiento eléctrico de la vivienda."
      }

    ]
   }

  ngOnInit(): void {
  }

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "arrows": true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

}
