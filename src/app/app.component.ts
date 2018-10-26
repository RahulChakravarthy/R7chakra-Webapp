import {
  AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2,
  ViewChild
} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  @ViewChild('loadPage') loadPage: ElementRef;
  @ViewChild('scrollToTop') scrollToTop: ElementRef;

  constructor() {}

  /**
   * After component is loaded
   */
  ngAfterViewInit() {
    this.initLoadScreen();
  }

  initLoadScreen() {
    let op = 1;  // initial opacity
      const timer = setInterval(() => {
      if (op <= 0.1) {
          clearInterval(timer);
          this.loadPage.nativeElement.style.display = 'none';
      }
      this.loadPage.nativeElement.style.opacity = op;
      this.loadPage.nativeElement.style.filter = 'alpha(opacity=' + op * 100 + ')';
      op -= op * 0.1;
    }, 25);
  }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
   this.displayOrHideScroll();
  }

  displayOrHideScroll() {
    if (this.scrollToTop.nativeElement.style.visibility === 'visible' && window.top === window.self) {
      let op = 1;  // initial opacity
      const timer = setInterval(() => {
        if (op <= 0.1) {
          clearInterval(timer);
          this.scrollToTop.nativeElement.style.display = 'none';
          this.scrollToTop.nativeElement.style.visibility = 'invisible';
        }
        this.scrollToTop.nativeElement.style.opacity = op;
        this.scrollToTop.nativeElement.style.filter = 'alpha(opacity=' + op * 100 + ')';
        op -= op * 0.1;
      }, 25);
    } else {
      let op = 0.1;  // initial opacity
      const timer = setInterval(() => {
        if (op >= 0.9) {
          clearInterval(timer);
          this.scrollToTop.nativeElement.style.display = 'inline';
          this.scrollToTop.nativeElement.style.visibility = 'visible';
        }
        this.scrollToTop.nativeElement.style.opacity = op;
        this.scrollToTop.nativeElement.style.filter = 'alpha(opacity=' + op * 100 + ')';
        op += op;
      }, 25);
    }
  }

}
