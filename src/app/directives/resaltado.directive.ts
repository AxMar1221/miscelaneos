import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef ) {
    console.log('Directiva llamada');
    // el.nativeElement.style.backgroundColor = "yellow";
  }
  @Input("appResaltado") newColor: string | undefined;
   
   @HostListener('mouseenter') mouseEnter(){
    this.highlight( this.newColor || 'yellow' );
   }
   @HostListener('mouseleave') mouseLeave(){
    this.highlight( '' );
   }

   private highlight( color: string ) {
    this.el.nativeElement.style.backgroundColor = color;
   }
}
