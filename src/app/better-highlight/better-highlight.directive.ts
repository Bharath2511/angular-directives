import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elref: ElementRef, private renderer: Renderer2) {}
  @Input() defaultColor: string = "transparent";
  @Input("appBetterHighlight") highlightolor: string = "blue";
  @HostBinding("style.backgroundColor") backgroundColor: string =
    this.defaultColor;

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
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
    this.backgroundColor = this.highlightolor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elref.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = this.defaultColor;
  }
}
