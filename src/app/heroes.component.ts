import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService],
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

   constructor(
     private router: Router,
     private heroService: HeroService) {}

   getHeroesSlowly(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
   }

   ngOnInit(): void{
     this.getHeroesSlowly();
   }

   gotoDetail(): void {
     this.router.navigate(['/detail', this.selectedHero.id]);
   }
}

