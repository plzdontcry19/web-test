import { Component, Input } from '@angular/core';

@Component({
  selector: 'recommended-card',
  templateUrl: './RecommentCard.component.html'
})
export class RecommentCard {
  @Input()
  public img: string;
  @Input()
  public detail: string;
  @Input()
  public price: number;
}