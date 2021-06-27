import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/Card';
import { CardService } from '../shared/card.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  Cards = [];

  constructor(private aptService: CardService) {}

  ngOnInit() {
    this.fetchCards();
    let cardsRes = this.aptService.getCardList();
    cardsRes.snapshotChanges().subscribe((res) => {
      this.Cards = [];
      res.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Cards.push(a as Card);
      });
    });
  }

  fetchCards() {
    this.aptService
      .getCardList()
      .valueChanges()
      .subscribe((res) => {
        console.log(res);
      });
  }

  deleteCard(id) {
    console.log(id);
    if (window.confirm('Seguro ¿Quieres borrar esta tarjeta ?')) {
      this.aptService.deleteCard(id);
    }
  }
}
