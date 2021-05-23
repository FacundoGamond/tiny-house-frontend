import { Component, OnInit } from '@angular/core';
declare const animation: any;

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  public logo: any;
  public boxes: any;

  constructor() {
    this.boxes = ['transportable', 'diseño personalizable', 'sustentable', 'alta tecnologia', 'calidad constructiva']
  }

  ngOnInit(): void {
    //DOM
    this.logo = document.querySelector('.logo-rotator');

    this.rotator();
    //animation(document.querySelector('.c-hero'));
  }

  rotator() {
    let rotation = 360;
    setInterval(() => {
      this.logo.style.transform = `rotate(${rotation}deg)`;
      rotation += 360;
    }, 6000)
  }
}
