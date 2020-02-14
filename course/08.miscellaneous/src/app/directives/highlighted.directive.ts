import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor(
    private elmnt:ElementRef,
  ) { 
    console.log("Directive run!")
    // elmnt.nativeElement.style.backgroundColor = "yellow";
  }

  @Input("appHighlighted") newColor:string;

  @HostListener('mouseenter') mouseEnter() {
    console.log(this.newColor)
    this.highlight(this.newColor || 'yellow')
    // this.elmnt.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') mouseLeave() {
    this.highlight(null)
    // this.elmnt.nativeElement.style.backgroundColor = null;
  }

  // private highlight(color:string = 'yellow') {
    private highlight(color:string) {
    this.elmnt.nativeElement.style.backgroundColor = color;
  }
}
