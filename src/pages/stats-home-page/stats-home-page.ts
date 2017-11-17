import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';

import { Game } from '../../models/game';

import { AddEditGamePage } from '../add-edit-game/add-edit-game';

class GameTotals {
  G: number = 0;
  AB: number = 0;
  R: number = 0;
  H: number = 0;
  double: number = 0;
  triple: number = 0;
  HR: number = 0;
  RBI: number = 0;
  BB: number = 0;
  K: number = 0;
  SB: number = 0;
  CS: number = 0;
  AVG: string = '';
  OBP: string = '';
  SLG: string = '';

  constructor() {}
}

@Component({
  selector: 'stats-home-page',
  templateUrl: 'stats-home-page.html'
})
export class StatsHomePage {
  gameTotals: GameTotals = new GameTotals();
  games: Game[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, private actionSheetCtrl: ActionSheetController) {
    let newGame: Game = new Game();
    newGame.buildObject({
      'id': '1',
      'double': '1',
      'triple': '0',
      'AB': '4',
      'BB': '0',
      'CS': '0',
      'date': '6/4/17',
      'H': '3',
      'HR': '1',
      'K': '0',
      'opponent': 'Raptors',
      'R': '1',
      'RBI': '3',
      'SB': '0',
      'userId': '123'
    });
    this.games.push(newGame);
    newGame = new Game();
    newGame.buildObject({
      'id': '2',
      'double': '0',
      'triple': '0',
      'AB': '3',
      'BB': '1',
      'CS': '0',
      'date': '5/27/17',
      'H': '1',
      'HR': '0',
      'K': '1',
      'opponent': 'Senators',
      'R': '0',
      'RBI': '0',
      'SB': '0',
      'userId': '123'
    });
    this.games.push(newGame);
    newGame = new Game();
    newGame.buildObject({
      'id': '3',
      'double': '0',
      'triple': '0',
      'AB': '4',
      'BB': '0',
      'CS': '0',
      'date': '5/25/17',
      'H': '1',
      'HR': '0',
      'K': '0',
      'opponent': 'Hawks',
      'R': '1',
      'RBI': '1',
      'SB': '1',
      'userId': '123'
    });
    this.games.push(newGame);
    newGame = new Game();
    newGame.buildObject({
      'id': '4',
      'double': '1',
      'triple': '0',
      'AB': '5',
      'BB': '1',
      'CS': '0',
      'date': '5/20/17',
      'H': '3',
      'HR': '1',
      'K': '1',
      'opponent': 'Bulls',
      'R': '2',
      'RBI': '4',
      'SB': '1',
      'userId': '123'
    });
    this.games.push(newGame);

    this.calculateGameTotals();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsHomePage');
  }

  calculateGameTotals() {
    for (let i = 0; i < this.games.length; i++) {
      let currGame = this.games[i];

      this.gameTotals.G += 1;
      this.gameTotals.AB = parseInt(currGame.AB) + this.gameTotals.AB;
      this.gameTotals.R = parseInt(currGame.R) + this.gameTotals.R;
      this.gameTotals.H = parseInt(currGame.H) + this.gameTotals.H;
      this.gameTotals.double = parseInt(currGame.double) + this.gameTotals.double;
      this.gameTotals.triple = parseInt(currGame.triple) + this.gameTotals.triple;
      this.gameTotals.HR = parseInt(currGame.HR) + this.gameTotals.HR;
      this.gameTotals.RBI = parseInt(currGame.RBI) + this.gameTotals.RBI;
      this.gameTotals.BB = parseInt(currGame.BB) + this.gameTotals.BB;
      this.gameTotals.K = parseInt(currGame.K) + this.gameTotals.K;
      this.gameTotals.SB = parseInt(currGame.SB) + this.gameTotals.SB;
      this.gameTotals.CS = parseInt(currGame.CS) + this.gameTotals.CS;
    }
    
    this.gameTotals.AVG = this.getAverage(this.gameTotals.H, this.gameTotals.AB);
    this.gameTotals.OBP = this.getOnBasePercentage(this.gameTotals.H, this.gameTotals.BB, this.gameTotals.AB);
    this.gameTotals.SLG = this.getSluggingPercentage(this.gameTotals.H, this.gameTotals.double, this.gameTotals.triple, this.gameTotals.HR, this.gameTotals.AB);
  }

  confirmDelete(game: Game) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this game?<br> vs ' + game.opponent + ' on ' + game.date,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.deleteGame(game);
          }
        }
      ]
    });
    alert.present();
  }

  deleteGame(game: Game) {
    //delete game
  }

  editGame(game: Game) {
    this.navCtrl.push(AddEditGamePage, {
      game: game
    });
  }

  floatToNumber(strNum: string): number {
    return parseFloat(strNum);
  }

  getAverage(hits: number, atBats: number): string {
    let avg: number = hits / atBats;
    if (avg === 1) {
        return "1.000"
    } 
    return avg.toFixed(3).substring(1,5);
  }

  getOnBasePercentage(hits: number, walks: number, atBats: number): string {
    let avg: number = (hits + walks) / atBats;
    if (avg === 1) {
        return "1.000"
    } 
    return avg.toFixed(3).substring(1,5);
  }

  getSluggingPercentage(hits: number, doubles: number, triples: number, homeRuns: number, atBats: number): string {
    let singles: number = hits - ( doubles + triples + homeRuns ); // 5 hits - (1double + 0triples + 1homerun) = 3singles
    
    let totalBases = singles + (2*doubles) + (3*triples) + (4*homeRuns);
    let avg = totalBases / atBats;

    if (avg === 1) {
        return "1.000"
    } 
    return avg.toFixed(3).substring(1,5);
  }

  intToNumber(strNum: string): number {
    return parseInt(strNum);
  }

  presentActionSheet(game: Game) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Game vs ' +game.opponent + ' on ' + game.date,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.confirmDelete(game);
          }
        }, {
          text: 'Edit',
          handler: () => {
            this.editGame(game);
          }
        }, {
          text: 'View',
          handler: () => {
            console.log('View Game details clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
