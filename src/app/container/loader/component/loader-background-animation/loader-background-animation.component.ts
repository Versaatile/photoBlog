import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, sequence
} from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loader-background-animation',
  templateUrl: './loader-background-animation.component.html',
  styleUrls: ['./loader-background-animation.component.scss'],
  animations: [
    trigger('strip', [
      state('open', style({
        transform: 'translateX(100%)',
      })),

      transition('* => open', [
        animate('0.7s ease-out')
      ]),
    ])
  ]
})


export class LoaderBackgroundAnimationComponent implements OnInit {
  public stripWidth: number;
  public stripHeight: number;

  @Input() nbOfStrip;
  @Input() triggerBackground: BehaviorSubject<boolean>;

  public triggerStrip = [];

  constructor() {
  }

  ngOnInit() {
    this.stripWidth = window.innerWidth;
    this.stripHeight = window.innerHeight / +this.nbOfStrip;

    for (let i = 0; i < this.nbOfStrip; ++i) {
      this.triggerStrip.push(false);
    }

    this.triggerBackground.subscribe((value) => {
      if (value) {
        this.executeAnimation();
      }
    });
  }

  private async executeAnimation() {
    for (let i = 0; i < this.nbOfStrip; ++i) {
      await new Promise(resolve => {
        setTimeout(() => {
          this.triggerStrip[i] = !this.triggerStrip[i];
          resolve();
        }, 200);
      });
    }
  }


}
