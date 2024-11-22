import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-condition',
  standalone: true,
  imports: [],
  templateUrl: './terms-condition.component.html',
  styleUrl: './terms-condition.component.css'
})
export class TermsConditionComponent  {
  acceptTerms() {
    // Logic to handle acceptance of terms
    console.log('Terms accepted!');
  }

  declineTerms() {
    // Logic to handle decline of terms
    console.log('Terms declined!');
  }


}
