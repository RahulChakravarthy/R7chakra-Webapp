import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  @ViewChild('loadPage') loadPage: ElementRef;

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

}
