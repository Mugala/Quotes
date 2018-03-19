import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1, 'The sun is a star.','A.B Clark'),
    new Quote(2, 'The moon is beautiful.', 'B.C Smith'),
    new Quote(3, 'The earth is meh.', 'D.E Jacobsons'),
    new Quote(4, 'The galaxy is large.', 'F.G Randos'),
    new Quote(5, 'The universe is expanding.', 'I.J Persons'),
];
  constructor(){  }
}
