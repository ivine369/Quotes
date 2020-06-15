import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  ...
 

  quotes:Quote[] = [
    new Quote(1, 'sharain', 'The way to get started is to quit talking and begindoing.',new Date(2020,05,14),
    new Quote(2, 'Vallary', 'Dont let yesterday take up too much of today.',new Date(2020,07,23),
    new Quote(3, 'Rizzanael', 'We may encounter many defeats but we must not be defeated.',new Date(2020,09,23),
    new Quote(4, 'Boaz', 'Telling an introvert to go party is like telling a saint to go to Hell.',new Date(2020,04,12),
    new Quote(5, 'Herbert', 'The best way to behave is not too.',new Date(2020,09,10),
    new Quote(6, 'Ethan', 'Never miss a party....good for the nerves like celery.',new Date(2020,03,24),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
 let quoteLength = this.quotes.length;
 quote.id = quoteLength+1;
 quote.completeDate = new Date(quote.completeDate)
 this.quotes.push(quote)
}
constructor() { }

ngOnInit() {
}

}