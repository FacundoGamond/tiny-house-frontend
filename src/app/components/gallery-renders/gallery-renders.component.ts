import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-renders',
  templateUrl: './gallery-renders.component.html',
  styleUrls: ['./gallery-renders.component.scss']
})
export class GalleryRendersComponent implements OnInit {

  public slides: any;
  constructor() {
    this.slides = [
      { img: "../../../assets/renders/1.jpeg" },
      { img: "../../../assets/renders/2.jpeg" },
      { img: "../../../assets/renders/3.jpeg" },
      { img: "../../../assets/renders/4.jpeg" },
      { img: "../../../assets/renders/5.jpeg" },
      { img: "../../../assets/renders/6.jpeg" },
      { img: "../../../assets/renders/7.jpeg" },
      { img: "../../../assets/renders/8.jpeg" },
      { img: "../../../assets/renders/9.jpeg" },
      { img: "../../../assets/renders/10.jpeg" },
      { img: "../../../assets/renders/11.jpeg" },
      { img: "../../../assets/renders/12.jpeg" },
      { img: "../../../assets/renders/13.jpeg" },
      { img: "../../../assets/renders/14.jpeg" },
      { img: "../../../assets/renders/15.jpeg" },
      { img: "../../../assets/renders/16.jpeg" },
      { img: "../../../assets/renders/17.jpeg" },
      { img: "../../../assets/renders/18.jpeg" },
      { img: "../../../assets/renders/19.jpeg" },
      { img: "../../../assets/renders/20.jpeg" },
      { img: "../../../assets/renders/21.jpeg" },
      { img: "../../../assets/renders/22.jpeg" },
      { img: "../../../assets/renders/23.jpeg" },
      { img: "../../../assets/renders/24.jpeg" },
      { img: "../../../assets/renders/25.jpeg" },
      { img: "../../../assets/renders/26.jpeg" },
      { img: "../../../assets/renders/27.jpeg" },
      { img: "../../../assets/renders/28.jpeg" },
      { img: "../../../assets/renders/29.jpeg" },
      { img: "../../../assets/renders/30.jpeg" }
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
          centerPadding: '0px',
        }
      }
    ]
  };

  ngOnInit(): void {
  }

  nextSlide() {
    const nextSlide = $('.slick-next');
    nextSlide.click();
  }

  prevSlide() {
    const nextSlide = $('.slick-prev');
    nextSlide.click();
  }

}
