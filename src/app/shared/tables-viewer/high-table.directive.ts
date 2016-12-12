import { Directive, ElementRef, Input, Renderer, OnInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { Observable } from '@reactivex/rxjs';
@Directive({
  selector: '[hTable]',
  
})
export class TableHighlightDirective implements AfterViewInit {
  @Input() hTable: string;
  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngAfterViewInit() {
      let text: string = this.el.nativeElement.innerText;
      this.el.nativeElement.className = this.el.nativeElement.className.split(' ').filter(c => !c.includes('table-highlight')).join(' ');
      if (this.hTable !== '' && text.toLowerCase().includes(this.hTable.toLowerCase())) {
          this.renderer.setElementClass(this.el.nativeElement, 'table-highlight', true);
      }
  }
  
}
