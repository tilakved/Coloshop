import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../core/services/helper/http/http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: any;
  count_day: any = '03';
  count_hour: any = '15';
  count_min: any = '45';
  count_sec: any = '23';
  interval: any

  constructor(private _httpService: HttpService) {
  }

  ngOnInit(): void {
    this._httpService.getPosts()
      .subscribe(response => {
        this.posts = response;
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


}
