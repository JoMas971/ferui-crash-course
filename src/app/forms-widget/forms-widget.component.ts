import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-widget',
  templateUrl: './forms-widget.component.html'
})
export class FormsWidgetComponent {

  inputModel: string;
  numberModel: number;
  selectModel: string;

  countries = [
    { id: 1, nested: { countryId: 'L', name: 'Lithuania' } },
    { id: 2, nested: { countryId: 'U', name: 'USA' } },
    { id: 3, nested: { countryId: 'A', name: 'Australia' } },
    { id: 4, nested: { countryId: 'FR', name: 'France' } },
    { id: 5, nested: { countryId: 'UK', name: 'United Kingdom' } }
  ];
}
