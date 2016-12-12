import { Directive, ElementRef, Input, Renderer, OnInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { Observable } from '@reactivex/rxjs';
@Directive({
  selector: '[hField]',
  
})
export class FieldHighlightDirective implements AfterViewInit {
  @Input() hField: string;
  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngAfterViewInit() {
      let text: string = this.el.nativeElement.innerText;
      this.el.nativeElement.className = this.el.nativeElement.className.split(' ').filter(c => !c.includes('field-highlight')).join(' ');
      if (this.hField !== '' && text.toLowerCase().includes(this.hField.toLowerCase())) {
          this.renderer.setElementClass(this.el.nativeElement, 'field-highlight', true);
      }
  }
  
}
