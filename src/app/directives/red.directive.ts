import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  //using principle o dependecie injection
  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#e35e6b'
  }

}
