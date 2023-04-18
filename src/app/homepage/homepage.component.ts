import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
  currentPosition: any = 0;
  scrollDirection: string = 'up';
  scrolled: boolean = true;
  scroll(event: any) {
    var scrolling = event.target.scrollTop;
    if (scrolling > this.currentPosition) {
      console.log('scroll dow');
      this.currentPosition = scrolling;
      this.scrollDirection = 'down';
    } else {
      console.log('scroll up');
      this.currentPosition = scrolling;
      this.scrollDirection = 'up';
    }
    this.scrolled = true;
    var timer = null;
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      this.scrolled = false;
    }, 1000);
  }
  routeToLetter(choose: any) {
    switch (choose) {
      case 'beauty':
        sessionStorage.setItem('title', 'Beauty');
        sessionStorage.setItem('text', '1');
        break;
      case 'kindness':
        sessionStorage.setItem('title', 'Kindness');
        sessionStorage.setItem('text', '2');
        break;
      case 'sincerity':
        sessionStorage.setItem('title', 'Sincerity');
        sessionStorage.setItem('text', '3');
        break;
      case 'confusion':
        sessionStorage.setItem('title', 'Confusion');
        sessionStorage.setItem('text', '4');
        break;
      case 'you':
        sessionStorage.setItem('title', 'You');
        sessionStorage.setItem('text', '5');
        break;
    }

    this.route.navigate(['/letter-page']);
  }
}
