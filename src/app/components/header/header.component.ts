import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public toggler: any;
  public menu: any;
  public navbar: any;
  public header: any;
  public logo: any;
  public prehead: any;

  constructor() { }

  ngOnInit(): void {
    //Getting dom elements
    this.navbar = document.querySelector<HTMLElement>('.navbar');
    this.header = this.navbar.parentElement;
    this.toggler = this.navbar.querySelector('[toggler-menu]');
    this.menu = this.navbar.querySelector('.menu');
    this.logo = this.navbar.querySelector('.logo');
    this.onScrollNavbar();
  }

  openMenu() {
    const brandingHeight = document.querySelector('.c-navbar').clientHeight;
    
    this.menu.style.paddingTop = brandingHeight + 'px';

    if (this.toggler.getAttribute('aria-expanded') == 'false') {

      this.menu.setAttribute('aria-expanded', 'true');

      this.toggler.setAttribute('aria-expanded', 'true');

      this.header.classList.add('expanded');

    } else {

      this.menu.setAttribute('aria-expanded', 'false');

      this.toggler.setAttribute('aria-expanded', 'false');

      this.header.classList.remove('expanded');

    }

  }

  onScrollNavbar() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 74) {
        this.toggler.classList.add('on-scroll');
        this.navbar.classList.add('on-scroll');
        this.logo.classList.add('on-scroll');
        this.header.style.position = 'fixed';
      } else {
        this.toggler.classList.remove('on-scroll');
        this.navbar.classList.remove('on-scroll');
        this.logo.classList.remove('on-scroll');
        this.header.style.position = 'sticky';
      }
    });
  }

}