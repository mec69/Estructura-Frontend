import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltarTexto]',
  standalone: true
})
export class ResaltarTextoDirective {

  @Input() colorResaltar: string = 'blue'; // Color por defecto

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.cambiarColor(this.colorResaltar);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cambiarColor(null);
  }

  private cambiarColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
