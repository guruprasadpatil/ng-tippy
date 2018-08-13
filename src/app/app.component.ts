import { Component, OnInit } from '@angular/core';
import { TippyService } from 'ng-tippy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private tippyService: TippyService) { }

  title = 'app';

  ngOnInit(): void {
    console.log('Got in here');
    setTimeout(() => {
      console.log('Got in here time');
      this.tippyService.hideTippy('tippy');
    }, 5000);
  }
}
