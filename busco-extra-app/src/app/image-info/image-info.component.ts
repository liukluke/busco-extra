import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image-service.service';

@Component({
  selector: 'app-image-info',
  templateUrl: './image-info.component.html',
  styleUrls: ['./image-info.component.scss']
})
export class ImageInfoComponent implements OnInit {
  image: any;

  constructor(private route: ActivatedRoute, private imageService: ImageService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.image = this.imageService.get(+params['id']);
    });

  }

}
