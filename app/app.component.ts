import {Component} from 'angular2/core';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';
import {FlyingHeroesComponent, FlyingHeroesImpureComponent} from './flying-heroes.component';

@Component({
  selector: 'my-app',
  template: `
    <p>The hero's birthday is {{ birthday | date:format | uppercase}}</p>
    <button (click)="toggleFormat()">Toggle Format</button>
    <p>A: {{a | currency:'USD':false}}</p>
    <p>B: {{b | currency:'USD':true:'4.2-2'}}</p>
    <hr>
    <h2>Power Booster</h2>
    <p>
      Super power boost: {{2 | exponentialStrength:4}}
    </p>
    <hr>
    <h2>Power Boost Calculator</h2>
    <div>Normal power: <input [(ngModel)]="power"></div>
    <div>Boost factor: <input [(ngModel)]="factor"></div>
    <p>
       Super Hero Power: {{power | exponentialStrength: factor}}
    </p>
    <hr>
    <flying-heroes></flying-heroes>
    <flying-heroes-impure></flying-heroes-impure>
    `, pipes: [ExponentialStrengthPipe],
  directives: [FlyingHeroesComponent, FlyingHeroesImpureComponent]
})
export class AppComponent {
  birthday = new Date(1993, 9, 9);
  a: number = 0.259;
  b: number = 1.3495;
  toggle = true;
  get format() { return this.toggle ? 'medium' : 'fullDate' }
  toggleFormat() { this.toggle = !this.toggle; }
  power = 5;
  factor = 1;
}
