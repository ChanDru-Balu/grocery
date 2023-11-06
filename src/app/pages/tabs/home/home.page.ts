import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items : any[] = [1,2,3]
  constructor() {
    register()
   }

  ngOnInit() {
  }

}
