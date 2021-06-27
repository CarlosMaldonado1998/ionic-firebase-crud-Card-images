import { Injectable } from '@angular/core';
import { Card } from '../shared/Card';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cardListRef: AngularFireList<any>;
  cardRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  //Create
  createCard(apt: Card) {
    return this.db.list('/cards').push({
        name: apt.name,
        category: apt.category,
        title: apt.title,
        luckynumber: apt.luckynumber
    })
  }

  //Get Single
  getCard(id: string) {
    this.cardRef = this.db.object('/cards/' + id);
    return this.cardRef;
  }

  //Get List
  getCardList() {
    this.cardListRef = this.db.list('/cards');
    return this.cardListRef;
  }

  //Update
  updateCard(id, apt: Card) {
    return this.cardRef.update({
      name: apt.name,
      category: apt.category,
      title: apt.title,
      luckynumber: apt.luckynumber,
    });
  }

  //Delete
  deleteCard(id: string) {
    this.cardRef = this.db.object('/cards/' + id);
    this.cardRef.remove();
  }
}
