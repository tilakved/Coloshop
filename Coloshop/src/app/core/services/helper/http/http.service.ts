import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://localhost:3000/productData';
  id: any;

  constructor(private httpClient: HttpClient) {
  }

  getUrl() {
    return this.httpClient.get(this.url);
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + '/' + id);
  }

  add() {
    return this.httpClient.post(this.url, {
      "id": this.id++,
      "new_product": true,
      "discount": "",
      "wishlist": false,
      "image_path": "assets/images/product_1.png",
      "product_name": "Samsung CF591 Series Curved 27-Inch FHD Monitor",
      "sale_price": "",
      "actual_price": "",
      "category": []

    })
  }

  save(p: any) {
    return this.httpClient.put(this.url + '/' + p.id, p)
  }
}
