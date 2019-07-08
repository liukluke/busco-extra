import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image-service.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  images: Array<Object> = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getList();
  }

}
