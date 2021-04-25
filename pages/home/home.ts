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
  bmi: number;
  bmiMessage: string;
bmi2: number;
bmi3: number;

  constructor(public navCtrl: NavController) {}
  
  calculateBMI() {
    this.bmi = this.LoanAmount * (this.InterestRate / 100) * this.LoanTerm;
    this.bmi = parseFloat (this.bmi.toFixed(2));

    this.bmi2 = (this.LoanAmount + this.LoanAmount * (this.InterestRate / 100) * this.LoanTerm);
    this.bmi = parseFloat(this.bmi.toFixed(2));

    this.bmi3 = ((this.LoanAmount + this.LoanAmount * (this.InterestRate / 100) * this.LoanTerm) / this.LoanTerm)
    this.bmi = parseFloat(this.bmi.toFixed(2));
  }
}