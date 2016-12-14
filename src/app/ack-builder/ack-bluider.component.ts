import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'ack-builder',
  templateUrl: './ack-builder.component.html',
  styleUrls: ['./ack-builder.component.scss']
})
export class AckBuilderComponent {
  constructor() {
    // console.log('req',  req)

  }
}
