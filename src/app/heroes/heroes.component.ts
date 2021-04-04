import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero'
import { Observable, of } from 'rxjs';
import { HEROES } from '../mock-heroes';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(private messageService: MessageService, private heroService: HeroService) { }

  ngOnInit(): void {
      this.getHeroes();
  }

  onSelect(hero: Hero) {
        this.selectedHero = hero;
        this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  getHeroes():void {
      this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }



}
