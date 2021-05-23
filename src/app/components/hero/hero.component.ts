import { Component, OnInit } from '@angular/core';
declare const animation: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //animation(document.querySelector('.c-hero'));
  }

}
