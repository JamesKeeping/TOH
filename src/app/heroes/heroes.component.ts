import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero'
import { Observable, of } from 'rxjs';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
      this.getHeroes();
  }

  onSelect(hero: Hero) {
        this.selectedHero = hero;
  }

  getHeroes():void {
      this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


}