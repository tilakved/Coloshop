import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../core/services/helper/http/http.service";
import {Router} from "@angular/router";
import {EditorService} from "../../../core/services/helper/editor/editor.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts: any;

  constructor(private _httpService: HttpService, private route: Router, private editor:EditorService) {
  }

  ngOnInit(): void {
    this._httpService.getUrl().subscribe((data: any) => {
      this.posts = data;
    });
  }

  addRow() {
    this._httpService.add().subscribe(response => {
      this.ngOnInit()
      // console.log(response)
    })
  }



  deleteRow(row: any, index: any) {
    this._httpService.delete(row.id).subscribe(response => {
      // console.log(response)
    })
    this.posts.splice(index, 1)
  }

  editDetails(p: any) {
    this.editor.editData = p
    this.route.navigate(['/edit'])
  }
}
