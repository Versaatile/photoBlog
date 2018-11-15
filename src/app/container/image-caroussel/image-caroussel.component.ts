import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-image-caroussel',
  templateUrl: './image-caroussel.component.html',
  styleUrls: ['./image-caroussel.component.scss'],
})
export class ImageCarousselComponent implements OnInit {

  public showNavigationArrows = false;
  public showNavigationIndicators = true;
  public oldActive = false;
  public images = [];
  constructor() {
    this.images.push('../../../assets/IMG_4884.jpg');
    this.images.push('../../../assets/IMG_6717.jpg');
  }

  ngOnInit() {
  }

  carouselMouseDown(event) {
    this.oldActive = true;
  }

  carouselMouseUp(event) {
    this.oldActive = false;
  }
}



