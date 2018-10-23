import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, sequence
} from '@angular/animations';


@Component({
  selector: 'app-loader-text-animation',
  templateUrl: './loader-text-animation.component.html',
  styleUrls: ['./loader-text-animation.component.scss'],
  animations: [
    trigger('text', [
      state('closed', style({
        transform: 'rotate(-20deg) translateY(-10vh)',
        transformOrigin: 'bottom left',
      })),

      transition('closed => *', [
        animate('0.5s ease-in')
      ]),
    ]),

    trigger('textBack', [

      state('open', style({
        transform: 'rotate(20deg) translateY(10vh)',
        transformOrigin: 'bottom left',
      })),

      transition('closed => open', [
        animate('0.5s ease-in'),
      ]),
    ]),

    trigger('firstLine', [
      state('closed', style({
        width: 0,
      })),

      transition('closed => *', [
        animate('0.5s ease-out'),
      ]),
    ]),

    trigger('line', [
      state('closed', style({
        width: 0,
      })),

      transition('closed => *', [
        animate('0.5s ease-out'),
      ]),
    ]),

    trigger('backline', [
      state('open', style({
        transform: 'translateX(50vw)',
      })),

      transition('* => open', [
        animate('0.5s ease-in'),
      ]),
    ])]
})

export class LoaderTextAnimationComponent implements OnInit {
  public triggerText = false;
  public triggerTextBack = false;
  public triggerFirstLine = false;
  public triggerLine = false;
  public triggerBackline = true;
  public triggerLineBack = false;
  public displayfirstLine = true;
  public displayfirstText = true;

  public text: String = 'Fenrir\'s photo';

  @Output() finished = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.triggerText === false) {
      setTimeout(() => this.triggerText = !this.triggerText);
    }
  }

  public textAnimationDone(event) {
    if (event.fromState === 'closed') {
      this.triggerFirstLine = !this.triggerFirstLine;
    }
  }

  public firstLineAnimationDone(event) {
    if (event.fromState === 'closed') {
      this.triggerLine = !this.triggerLine;
      this.displayfirstText = !this.displayfirstText;
    }
  }

  public lineAnimationDone(event) {
    if (event.fromState === 'closed') {
      this.displayfirstLine = !this.displayfirstLine;
      this.triggerText = !this.triggerText;
    }
  }

  public backLineAnimationDone(event) {
    console.log(event);
    if (event.fromState === 'closed') {
      this.triggerTextBack = !this.triggerTextBack;
      this.finished.emit(true);
    }
  }

}
