import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.route.navigate(['/login']);
  }

  openDashboard() {
    this.route.navigate(['admin/dashboard']);
  }
}
