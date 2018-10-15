import { Component, HostBinding, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, sequence
} from '@angular/animations';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    trigger('text', [
      state('open', style({
        opacity: 1,
        color: 'white',
      })),

      state('closed', style({
        opacity: 1,
        transform: 'rotate(30deg)',
        transformOrigin: 'bottom right',
        overflow: 'hidden',
        color: 'black'
      })),

      transition('closed => open', [
        animate('0.7s ease-in')
      ]),

      transition('open => closed', [
        animate('0.7s ease-in')
      ]),
    ]),

    trigger('textBack', [
      state('closed', style({
        opacity: 1,
        color: 'white',
      })),

      state('open', style({
        opacity: 1,
        transform: 'rotateZ(30deg)',
        transformOrigin: 'bottom left',
        width: 0,
        color: 'white',
      })),

      transition('closed => open', [
        animate('0.7s ease-in')
      ]),

      transition('open => closed', [
        animate('0.7s ease-in')
      ]),
    ]),


    trigger('line', [
      state('open', style({
        opacity: 1,
      })),

      state('closed', style({
        opacity: 1,
        width: 0,
      })),

      transition('closed => open', [
        animate('0.5s ease-out'),
      ]),
    ]),

    trigger('backline', [
      state('open', style({
        opacity: 1,
        left: 200,
        width: 0
      })),

      state('closed', style({
        opacity: 1,
        left: 0,
      })),

      transition('closed => open', [
        animate('0.5s ease-in'),
      ]),

      transition('open => closed', [
        animate('0.5s 0.5s ease-in'),
      ]),
    ])]
})

export class LoaderComponent implements OnInit {
  public triggerText = false;
  public triggerTextBack = false;
  public triggerLine = false;
  public triggerBackline = true;
  public triggerLineBack = false;
  public displayfirstLine = true;
  public displayfirstText = true;



  constructor() { }

  ngOnInit() {
    if (this.triggerText === false) {
      setTimeout(() => this.triggerText = !this.triggerText);
    }
  }

  public textAnimationDone(event) {
    if (event.fromState === 'closed') {
      this.triggerLine = !this.triggerLine;
      this.displayfirstText = !this.displayfirstText;
    }
  }

  public lineAnimationDone(event) {
    console.log(event);
    if (event.fromState === 'closed') {
      this.displayfirstLine = !this.displayfirstLine;
      this.triggerText = !this.triggerText;
      this.triggerTextBack = !this.triggerTextBack;

    }
  }

}


/*
   trigger('line', [

      state('open', style({
        opacity: 1,
        color: 'white',
      })),

      state('closed', style({
        opacity: 1,
        width: 0,
        color: 'white'
      })),

      transition('closed => open', [
        animate('0.7s'),
      ]),

      transition('open => closed', [
        animate('0.7s')
      ]),
    ]),
*/
