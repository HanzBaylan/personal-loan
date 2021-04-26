import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  LoanAmount: number;
  LoanTerm: number;
  InterestRate: number;
  AmountPayable: number;
  InterestPayable: number;
  MonthlyPayable: number;
  
  calculateInterestPayable() {
    this.InterestPayable = this.LoanAmount * (this.InterestRate / 100) * this.LoanTerm;
    this.InterestPayable = parseFloat (this.InterestPayable.toFixed(2));

  calculateAmountPayable(); {
    this.AmountPayable = (this.LoanAmount + this.InterestPayable * (this.InterestRate / 100) * this.LoanTerm);
    this.AmountPayable = parseFloat(this.AmountPayable.toFixed(2));
    }
    
  calculateMonthlyPayable(); {
     this.MonthlyPayable = ((this.InterestPayable + this.AmountPayable * (this.InterestRate / 100) * this.LoanTerm) / this.LoanTerm)
    this.MonthlyPayable = parseFloat(this.MonthlyPayable.toFixed(2));
  }
  }
}