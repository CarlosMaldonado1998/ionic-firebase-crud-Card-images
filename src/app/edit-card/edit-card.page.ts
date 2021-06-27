import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CardService } from '../shared/card.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.page.html',
  styleUrls: ['./edit-card.page.scss'],
})
export class EditCardPage implements OnInit {
  updateCardForm: FormGroup;
  id: any;
  constructor(
    private aptService: CardService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService
      .getCard(this.id)
      .valueChanges()
      .subscribe((res) => {
        this.updateCardForm.setValue(res);
      });
      
  }

  ngOnInit() {
    this.updateCardForm = this.fb.group({
      name: [''],
      category: [''],
      title: [''],
      luckynumber: [''],
    });
    console.log("datos", this.updateCardForm.value)
  }

  
  updateForm() {
    this.aptService
      .updateCard(this.id, this.updateCardForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error) => console.log(error));
  }
}
