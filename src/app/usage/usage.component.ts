import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent {
  constructor(@Inject('req') req: any) {
    // console.log('req',  req)

  }
}
