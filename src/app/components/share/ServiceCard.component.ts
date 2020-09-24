import { Component, Input } from '@angular/core';

@Component({
  selector: 'service-card',
  templateUrl: './ServiceCard.component.html'
})
export class ServiceCard {
  @Input()
  public menuTitle: string;
}
