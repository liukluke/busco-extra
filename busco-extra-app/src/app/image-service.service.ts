import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import imageList from './imgData';

@Injectable()
export class ImageService {

  images:Array<Object> = imageList;

  constructor() { }

  getList(): Array<Object> {
    return this.images;
  }

  get(idImages: number): Object {
    return _.findWhere(this.images, { id: idImages });
  }

}
