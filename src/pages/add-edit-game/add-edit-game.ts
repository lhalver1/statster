import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Game } from '../../models/game'

@Component({
  selector: 'page-add-edit-game',
  templateUrl: 'add-edit-game.html'
})
export class AddEditGamePage {
  game: Game = new Game();
  errorMsg: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.game = navParams.get('game');
    console.log(this.game);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEditGamePagePage');
  }

  getArray(minimum: string, maximum: string): number[] {
    let min = parseInt(minimum);
    let max = parseInt(maximum);

    let arr: number[] = [];
    
    for (let i = min; i <= max; i++) {
      arr.push(i);
    }

    return arr;
  }

  saveGame() {
    this.validateGame();
  }

  validateGame(): boolean {
    let atBats: number = parseInt(this.game.AB);
    let hits: number = parseInt(this.game.H);
    let doubles: number = parseInt(this.game.double);
    let triples: number = parseInt(this.game.triple);
    let homeRuns: number = parseInt(this.game.HR);
    let strikeOuts: number = parseInt(this.game.K);
    let walks: number = parseInt(this.game.BB);

    if (hits > atBats) {
      this.errorMsg = "ERROR: Can't have more hits("+hits+") than at bats("+atBats+")!";
      return false;
    } else if(hits + strikeOuts > atBats) {
      this.errorMsg = "ERROR: Sum of hits(" + hits + ") + strike outs(" + strikeOuts + ") can't be more than at bats!";
      return false;
    } else if(doubles + triples + homeRuns > hits) {
      this.errorMsg = "ERROR: Sum of 2B(" + doubles + ") + 3B(" + triples + ") + HR(" + homeRuns + ") can't be more than hits(" + hits + ")!";
      return false;
    }

    this.errorMsg = '';
    return true;
  }

}
