import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  public slides: any;
  public images: any;

  constructor() {
    this.slides = [
      {
        img: "../../../assets/equipment/1.svg",
        title: "Living",
        content:'',
        id: 1
      },
      {
        img: "../../../assets/equipment/2.svg",
        title: "Cocina y Comedor",
        content:'',
        id: 2
      },
      {
        img: "../../../assets/equipment/3.svg",
        title: "Habitación",
        content:'',
        id: 3
      },
      {
        img: "../../../assets/equipment/4.svg",
        title: "Baño",
        content:'',
        id: 4
      }
    ]

    this.images = [{
      dir: "../../../assets/equipment/living/",
      images: 8
    },
    {
      dir: "../../../assets/equipment/kitchen/",
      images: 10
    },
    {
      dir: "../../../assets/equipment/room/",
      images: 5
    },
    {
      dir: "../../../assets/equipment/bath/",
      images: 5
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
      printimages += `<div style="padding: 0 20px"><img src="${imagesSelected.dir + i}.jpg" style="width: 500px; height: 500px; object-fit: cover; object-postition: center;"></div>`
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
