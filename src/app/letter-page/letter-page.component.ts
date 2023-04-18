import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-page',
  templateUrl: './letter-page.component.html',
  styleUrls: ['./letter-page.component.css'],
})
export class LetterPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title: any = sessionStorage.getItem('title');
  pronounce: any = sessionStorage.getItem('pronounce');
  text: any = sessionStorage.getItem('text');
}
