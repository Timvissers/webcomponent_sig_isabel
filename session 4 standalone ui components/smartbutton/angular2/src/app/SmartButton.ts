import {Component, bootstrap} from 'angular2/angular2';

class SmartButton {
    defaulttext : string;
}

@Component({
    selector: 'smart-button',
    template: `
        <a (click)="doSomething(smartButton)">
        {{smartButton.defaulttext}}
        <span></span>
        </a>
        `,
    properties: ['defaulttext:defaulttext']
})

class AppComponent {
    public smartButton: SmartButton = {
        defaulttext : 'default text'
    };
}
bootstrap(AppComponent);