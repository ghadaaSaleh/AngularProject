import { Directive, ElementRef, HostListener, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLightbox]'
})
export class LightboxDirective {

  @Input("appLightbox") highlight :string="yellow";
  constructor(private elementRef:ElementRef) { 

   // this.elementRef.nativeElement.style.color=`2px solid ${this.highlight}`
   this.elementRef.nativeElement.style.border=`3px solid yellow`;
  }
  ngOnChanges(changes: SimpleChanges): void {
   this.elementRef.nativeElement.style.border=`2px solid ${this.highlight}`
  }
  @HostListener('mouseover') onHover() {
    this.elementRef.nativeElement.style.border=`10px solid yellow`;
  }
  @HostListener('mouseout') onOut() {
    this.elementRef.nativeElement.style.border=`2px solid ${this.highlight}`;
  }
}
