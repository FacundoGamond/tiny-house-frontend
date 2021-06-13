import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  submitForm() {
    event.preventDefault();
    const name =  (<HTMLInputElement>document.querySelector('#name')).value;
    const phone =  (<HTMLInputElement>document.querySelector('#phone')).value;
    const email =  (<HTMLInputElement>document.querySelector('#email')).value;
    const place =  (<HTMLInputElement>document.querySelector('#place')).value;

    const clearForm = () => {
      (<HTMLInputElement>document.querySelector('#name')).value = '';
      (<HTMLInputElement>document.querySelector('#phone')).value = '';
      (<HTMLInputElement>document.querySelector('#email')).value = '';
      (<HTMLInputElement>document.querySelector('#place')).value = '';
    }

    const sendMessage = message => {
      const modal = document.querySelector('.c-contact__modal');
      modal.innerHTML = message;
      modal.classList.add('show');

      setTimeout(() => {
        modal.classList.remove('show');
      }, 5000);
    }

    if(name && phone && email && place){
      //Prod server
      $.ajax({
        type: 'POST',
        url: `${window.origin}/api/send-email`,
        data: {
          name,
          phone,
          email,
          place
        }, //que envio
        beforeSend: function () {
          sendMessage('Enviando mensaje.')
        },
        success: function (response) {
          clearForm();
          sendMessage('Mensaje enviado!')
        },
        error: function () {
          sendMessage('Ups! hubo un error, intentalo más tarde.')
        },
        timeout: 10000
      })
    }else{
      sendMessage('Error, rellena todos los campos!')
    }

  }
}
