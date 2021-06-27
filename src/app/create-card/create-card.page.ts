import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CardService } from '../shared/card.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.page.html',
  styleUrls: ['./create-card.page.scss'],
})

export class CreateCardPage implements OnInit {
  cardForm: FormGroup;

  constructor(
    private aptService: CardService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.cardForm = this.fb.group({
      name: [''],
      category: [''],
      title: [''],
      luckynumber: ['']
    })
  }

  formSubmit() {
    if (!this.cardForm.valid) {
      return false;
    } else {
      this.aptService.createCard(this.cardForm.value).then(res => {
        console.log(res)
        this.cardForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}
