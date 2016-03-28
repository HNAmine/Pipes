import {Component} from 'angular2/core';
import {FlyingHeroesPipe,FlyingHeroesImpurePipe} from './flying-heroes.pipe';
import {HEROES} from './heroes';

@Component({
  selector: 'flying-heroes',
  templateUrl: 'app/flying-heroes.component.html',
  styles: ['#flyers, #all {font-style: italic}'],
  pipes: [FlyingHeroesPipe]
})

export class FlyingHeroesComponent {
  heroes: any[] = [];
  canFly = true;
  mutate = true;
  title = 'Flying Heroes (pure pipe)';

  constructor() { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    let hero = { name, canFly: this.canFly };
    if (this.mutate) {
      this.heroes.push(hero)
    } else {
      this.heroes = this.heroes.concat(hero);
    }
  }
  reset() { this.heroes = HEROES.slice(); }
}

@Component({
  selector: 'flying-heroes-impure',
  templateUrl: 'app/flying-heroes.component.html',
  styles: ['.flyers, .all {font-style: italic}'],
  pipes: [FlyingHeroesImpurePipe]
})

export class FlyingHeroesImpureComponent extends FlyingHeroesComponent {
  title = 'Flying Heroes (impure pipe)';
}
