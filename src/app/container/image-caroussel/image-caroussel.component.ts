import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-caroussel',
  templateUrl: './image-caroussel.component.html',
  styleUrls: ['./image-caroussel.component.scss']
})
export class ImageCarousselComponent implements OnInit {

  public images = [];
  constructor() {
    this.images.push('../../../assets/IMG_3018-2.jpg');
    this.images.push('../../../assets/IMG_4884.jpg');
    this.images.push('../../../assets/IMG_5123.jpg');
    this.images.push('../../../assets/IMG_6717.jpg');
    this.images.push('../../../assets/IMG_9124.jpg');
  }

  ngOnInit() {
  }

}
