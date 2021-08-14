import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sustentability-slider',
  templateUrl: './sustentability-slider.component.html',
  styleUrls: ['./sustentability-slider.component.scss']
})
export class SustentabilitySliderComponent implements OnInit {
  public slides: any;
  public images: any;

  constructor() {
    this.slides=[
      {
        img: "../../../assets/sustentability/1.svg",
        title: "Ahorro Energético",
        copy: "Equipada con artefactos eléctricos A+ (de eficiencia energética) e iluminación LED, proporcionando un importante ahorro a nivel energético y económico.",
        id: 1
      },
      {
        img: "../../../assets/sustentability/2.png",
        title: "Aislación Térmica",
        copy: "Su cobertura cuenta con doble aislación, tanto en paredes como en piso y techos. Además, gracias al doble laminado DVH de la puerta y las ventanas, la conservación de la temperatura ambiente es superior, proporcionando una excelente aislación térmica, acústica y un ahorro energético en la climatización de la vivienda.",
        id: 2
      },
      {
        img: "../../../assets/sustentability/3.svg",
        title: "Tratamiento de Aguas Residuales",
        copy: "Cuenta con dos tanques de 150 litros para aguas grises y negras, capacidad suficiente para conservar los residuos y hacer de ellos una correcta gestión.",
        id: 3
      },
      {
        img: "../../../assets/sustentability/4.svg",
        title: "Paneles solares",
        copy: "Cuenta con paneles solares que permiten generar energía renovable para cubrir el funcionamiento eléctrico de la vivienda.",
        id: 4
      }

    ]

    this.images = [{
      dir: "../../../assets/sustentability/energy-saving/",
      images: 3
    },
    {
      dir: "../../../assets/sustentability/insolation/",
      images: 2
    },
    {
      dir: "../../../assets/sustentability/water-fix/",
      images: 1
    },
    {
      dir: "../../../assets/sustentability/solar-panels/",
      images: 3
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

  openImages(event) {
    const clickedElement = event.view.document.activeElement.children;
    const elementId = clickedElement[0].id;
    const slider = document.querySelector('.slider-of-images');
    const imagesSelected = this.images[elementId - 1];
    let printimages = '';

    //Open modal
    slider.parentElement.classList.add('show');

    //Destroy previusly slick
    try {
      (<any>$(slider)).slick('unslick');
    } catch { }

    //Add images
    for (let i = 1; i <= imagesSelected.images; i++) {
      printimages += `<div style="padding: 0 20px"><img src="${imagesSelected.dir + i}.jpeg" style="width: 500px; height: 500px; object-fit: contain; object-postition: center;"></div>`
    }
    slider.innerHTML = printimages;

    //Slick init
    (<any>$(slider)).slick({
      slidesToShow: 1,
      slidesToScroll1: 1,
      arrows: true,
      centerMode: true,
      variableWidth: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
    })
  }

  closeImages(){
    document.querySelector('.slider-of-images').parentElement.classList.remove('show');;
  }

}
