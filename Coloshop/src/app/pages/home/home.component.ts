import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../core/services/helper/http/http.service";
import {OwlOptions} from "ngx-owl-carousel-o";
import {transition, trigger, useAnimation} from "@angular/animations";
import {fadeAnimation} from "../../core/animations/fade.animation";

@Component({
  selector: 'app-home',
  // animations: [
  //   trigger('openClose', [
  //     transition('open => closed', [
  //       useAnimation(fadeAnimation,
  //         {
  //           params: {
  //             height: 0,
  //             opacity: 1,
  //             backgroundColor: 'red',
  //             time: '1s'
  //           }
  //         })
  //     ])
  //   ])
  // ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],


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
    if (cat == 'all') {
      this.posts = this.products
      this.isSelected = cat
    } else if (this.products.filter((i: any) => i.category.includes(cat))) {
      this.posts = this.products.filter((i: any) => i.category.includes(cat))
      this.isSelected = cat
    }
  }

}
