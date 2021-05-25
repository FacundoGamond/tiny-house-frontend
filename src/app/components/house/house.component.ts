import { Component, OnInit } from '@angular/core';
declare const animation: any;

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  public logo: any;
  public arrows: any;
  public picture: any;

  constructor() {}

  ngOnInit(): void {
    //DOM
    this.logo = document.querySelector('.logo-rotator');
    this.arrows = document.querySelectorAll('[arrow]');
    this.picture = document.querySelector('[picture-slide]');

    //Logo rotation
    this.rotator();

    //Image slider on mobile
    this.slider();
  }

  rotator() {
    let rotation = 360;
    setInterval(() => {
      this.logo.style.transform = `rotate(${rotation}deg)`;
      rotation += 360;
    }, 6000)
  }

  slider(){
    let click = 0;
    this.arrows.forEach(arrow => {
      arrow.addEventListener('click', ()=>{
        if(arrow.getAttribute('arrow') == 'right' && click < 2){
          click++;
          this.picture.style.objectPosition = (click*50) + '%';
        }

        if(arrow.getAttribute('arrow') == 'left' && click > 0){
          click--;
          this.picture.style.objectPosition = (click*50) + '%';
        }

      });

    });
  }
}
