import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../core/services/helper/http/http.service";
import {OwlOptions} from "ngx-owl-carousel-o";
import {animate, query, style, transition, trigger, useAnimation} from "@angular/animations";
import {zoomIn} from 'ng-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('myAnimation', [transition('* <=> *', useAnimation(zoomIn, {
      params: {timing: 0.5, delay: 0}
    }))])

  ]

})
export class HomeComponent implements OnInit {
  posts: any;
  count_day: any = '03';
  count_hour: any = '15';
  count_min: any = '45';
  count_sec: any = '23';
  interval: any
  isSelected = 'all'
  products: any;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    nav: true,
    items: 5
  }

  constructor(private _httpService: HttpService) {
  }

  ngOnInit(): void {
    this._httpService.getUrl().subscribe((data: any) => {
      this.posts = data;
      // console.log("this.posts", this.posts)
    });

    this._httpService.getUrl().subscribe((data: any) => {
      this.products = data;
      // console.log("this.products", this.products)
    });

    this.interval = setInterval(() => {
      this.count_sec--;
      if (this.count_sec == 0) {
        this.count_sec = '60'
        this.count_min--;
        if (this.count_min == 0) {
          this.count_min = '60'
          this.count_hour--;
          if (this.count_hour == 0) {
            clearInterval(this.interval)
          }
        }
      }
    }, 1000)
  }

  checkCategory(cat: string) {
    this.posts = []
    if (cat == 'all') {
      this.posts = this.products
      // this.isSelected = cat
    } else if (this.products.filter((i: any) => i.category.includes(cat))) {
      this.posts = this.products.filter((i: any) => i.category.includes(cat))
    }
    this.isSelected = cat

  }

}
