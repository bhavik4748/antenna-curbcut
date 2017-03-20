import { Component } from '@angular/core';


@Component({
    selector: 'portal-app', // do use me do <portal-app> in html  ,
    
    styleUrls: ['/app/portalComponent/portal.component.css'],
    templateUrl: '/app/portalComponent/portal.component.html'

})
export class PortalComponent {
    name = 'Bhavik Gosrani';
    image = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    title: string = "Portal"
}
