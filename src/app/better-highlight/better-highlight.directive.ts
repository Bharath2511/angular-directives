import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elref: ElementRef, private renderer: Renderer2) {}
  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elref.nativeElement,
    //   "background-color",
    //   "blue"
    // );
  }
  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elref.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = "blue";
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elref.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = "transparent";
  }
}
