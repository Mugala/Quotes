import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'The sun is a star.','A.B Clark'),
    new Quote(2, 'The moon is beautiful.', 'B.C Smith'),
    new Quote(3, 'The earth is meh.', 'D.E Jacobsons'),
    new Quote(4, 'The galaxy is large.', 'F.G Randos'),
    new Quote(5, 'The universe is expanding.', 'I.J Persons'),
];

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  this.quotes.push(quote)

}

toogleDetails(index){
  this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
}
  constructor() { }

  ngOnInit() {
  }

}


