import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from "../users/users";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

casts: any = [
  {character: 'Morty Smith', alternate: 'Cop Morty'}
  {character: 'Rick Sanchez', alternate: 'Pickle Rikcy'}
  {character: 'Morty Smith', alternate: 'Cop Morty'}
  {character: 'Morty Smith', alternate: 'Cop Morty'}
  {character: 'Morty Smith', alternate: 'Cop Morty'}
  {character: 'Morty Smith', alternate: 'Cop Morty'}
  ]
items: string[];

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }
  
  initializeItems() {
    this.items = this.casts.map(a => a.character);
  }
  
  itemSelected(i) {
    alert(this.casts[i].alternate);
  }
  onGoToUsers() {
    this.navCtrl.push(UsersPage);
    
  }

}
