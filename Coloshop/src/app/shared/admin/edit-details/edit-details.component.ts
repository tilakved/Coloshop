import {Component, OnInit} from '@angular/core';
import {EditorService} from "../../../core/services/helper/editor/editor.service";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpService} from "../../../core/services/helper/http/http.service";
import {Router} from "@angular/router";

interface Product {
}

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {
  data = this.editor.editData
  formdata: any;
  new_fav: boolean = this.data.wishlist;
  new_new: boolean = this.data.new_product;
  new_data: any;
  cat_arr: any = this.data.category

  constructor(private editor: EditorService, private _httpService: HttpService, private route: Router) {
  }

  ngOnInit(): void {
    // console.log(this.editor.editData)
    this.formdata = new FormGroup({
      discount: new FormControl(this.data.discount),
      product_name: new FormControl(this.data.product_name),
      sale_price: new FormControl(this.data.sale_price),
      actual_price: new FormControl(this.data.actual_price)
    });
  }

  onClickSubmit(value: any) {
    // console.log(this.new_new);
    this.new_data = {
      "id": this.data.id,
      "new_product": this.new_new,
      "discount": value.discount,
      "wishlist": this.new_fav,
      "image_path": this.data.image_path,
      "product_name": value.product_name,
      "sale_price": value.sale_price,
      "actual_price": value.actual_price,
      "category": this.cat_arr
    }
    console.log(this.new_data)

    this._httpService.save(this.new_data).subscribe(response => {
      // console.log(response)
    })

    // this.formdata.reset();
    // alert('Your Data is Saved');
    // this.route.navigate(['/admin/dashboard']);

  }

  onNewChange(e: any) {
    // this.data.new_product = e.value
    if (e.value === "true") {
      // return e.value = true
      this.new_new = true
    } else {
      this.new_new = false
    }
    // console.log(" Value is : ", value);
  }

  onFavChange(e: any) {
    // this.data.wishlist = e.value
    if (e.value == "true") {
      this.new_fav = true
    } else {
      this.new_fav = false
    }
    // console.log(" Value is : ", value);
  }

  onCatChange(e: any) {
    // console.log(e.checked)
    if (!this.cat_arr.includes(e.value) && e.checked) {
      this.cat_arr.push(e.value)
      console.log(this.cat_arr)
    }
    if (this.cat_arr.includes(e.value) && !e.checked) {
      let temp_index = this.cat_arr.indexOf(e.value)
      this.cat_arr.splice(temp_index, 1)
      console.log(this.cat_arr)
    }
  }

}
