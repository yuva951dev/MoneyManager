import { Component, Directive, HostListener  } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoneyManager';
  public dataSource: Object[];
  public startDate: Date;
  public endDate: Date;
  constructor() {
    
    this.handleResize();
  }
  public handleResize(): void {
    if (document.documentElement.offsetWidth > 1400) {
      document.body.style.minHeight = 'auto';
      document.body.style.minHeight = document.documentElement.offsetHeight + 'px';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    /** Document height alignment corrections for high resoultion screens */
    this.handleResize();
  }
}
