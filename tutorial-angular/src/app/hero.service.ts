import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[]{ //Método getHeroes tem retorno do tipo lista de Hero e retorna os dados contidos em HEROES
    return HEROES;
  }

  constructor() { }
}
