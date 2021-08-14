import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public slides: any;
  constructor() { 
    this.slides=[
      {img: "../../../assets/gallery/1.jpeg"},
      {img: "../../../assets/gallery/2.jpeg"},
      {img: "../../../assets/gallery/3.jpeg"},
      {img: "../../../assets/gallery/4.jpeg"},
      {img: "../../../assets/gallery/5.jpeg"},
      {img: "../../../assets/gallery/6.jpeg"},
    ]
  }

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": true,
    centerMode: true,
    adaptiveHeight: true,
    centerPadding: '150px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          centerPadding: '0px'
        }
      }
    ]
  };

  ngOnInit(): void {
  }

  nextSlide(){
    const nextSlide = $('.slick-next');
    nextSlide.click();
  }

  prevSlide(){
    const nextSlide = $('.slick-prev');
    nextSlide.click();
  }

}
