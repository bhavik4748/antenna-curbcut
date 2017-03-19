import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // do use me do <my-app> in html
  template: `<h1>{{name}}</h1>
  <fieldset>
  <img [src]= "image" />
  </fieldset>
  `,
})
export class AppComponent {
  name = 'Bhavik Gosrani';
  image = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
}
