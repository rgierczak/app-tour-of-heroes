import { Component } from '@angular/core';

import '../assets/css/styles.css';

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title: 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'windstorm'
    }
}
