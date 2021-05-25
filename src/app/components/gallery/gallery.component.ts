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
      {img: "../../../assets/img/pictures/1.png"},
      {img: "../../../assets/img/pictures/2.png"},
      {img: "../../../assets/img/pictures/3.png"},
      {img: "../../../assets/img/pictures/4.png"},
      {img: "../../../assets/img/pictures/5.png"},
      {img: "../../../assets/img/pictures/6.png"},
    ]
  }

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": true
  };

  ngOnInit(): void {
  }

}
