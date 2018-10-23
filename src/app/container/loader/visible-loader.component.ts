import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-visible-loader',
  templateUrl: './visible-loader.component.html',
  styleUrls: ['./visible-loader.component.scss']
})
export class VisibleLoaderComponent implements OnInit {


  public triggerBackground: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit() {
  }

  public firstAnimationFinished(event) {
    this.triggerBackground.next(true);
  }

}
