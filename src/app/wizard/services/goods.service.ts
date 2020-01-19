import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  constructor(private _httpClient: HttpClient) {}

  getOrigins() {
    return this._httpClient.get(
      'https://my-json-server.typicode.com/galits/testNgsoft/origins'
    );
  }

  getPassages() {
    return this._httpClient.get(
      'https://my-json-server.typicode.com/galits/testNgsoft/passages'
    );
  }

  getCategories() {
    return this._httpClient.get(
      'https://my-json-server.typicode.com/galits/testNgsoft/categories'
    );
  }
  getunitMeasures() {
    return this._httpClient.get(
      'https://my-json-server.typicode.com/galits/testNgsoft/unitMeasures'
    );
  }
  getIngredients() {
    return this._httpClient.get(
      'https://my-json-server.typicode.com/galits/testNgsoft/ingredients'
    );
  }
}
