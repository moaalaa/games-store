import { GAMES } from './games';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Game } from '../Contracts/Game';
import { User } from '../Contracts/User';
import { USERS } from './users';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(): { games: Game[], users: User[] } {
    return {
      games: GAMES,
      users: USERS,
    };
  }

  // // Overrides the genId method to ensure that a hero always has an id.
  // // If the heroes array is empty,
  // // the method below returns the initial number (1) default first id.
  // // if the heroes array is not empty, the method below returns the highest
  // // hero id + 1 (incrementing id behavior).
  // genId(games: Game[]): number {
  //   return games.length > 0 ? Math.max(...games.map(a => a.id)) + 1 : 1
  // }
}
