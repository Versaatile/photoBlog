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
        transform: 'rotate(-30deg) translateY(-50px)',
        transformOrigin: 'bottom left',
        color: 'white',
      })),

      transition('closed => open', [
        animate('0.5s ease-in')
      ]),

      transition('open => closed', [
        animate('0.5s ease-in')
      ]),
    ]),

    trigger('textBack', [
      state('closed', style({
        opacity: 1,
        color: 'white',
      })),

      state('open', style({
        opacity: 1,
        transform: 'rotate(30deg) translateY(100px)',
        transformOrigin: 'bottom left',
        color: 'white',
      })),

      transition('closed => open', [
        animate('0.5s 1.5s ease-in'),
      ]),

      transition('open => closed', [
        animate('0.5s ease-in')
      ]),
    ]),


    trigger('firstLine', [
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
        transform: 'translateX(1000px)',
      })),

      state('closed', style({
        opacity: 1,
      })),

      transition('closed => open', [
        animate('0.5s 1.8s ease-in'),
      ]),

      transition('open => closed', [
        animate('0.5s ease-in'),
      ]),
    ])]
})

export class LoaderComponent implements OnInit {
  public triggerText = false;
  public triggerTextBack = false;
  public triggerFirstLine = false;
  public triggerLine = false;
  public triggerBackline = true;
  public triggerLineBack = false;
  public displayfirstLine = true;
  public displayfirstText = true;

  public text: String = 'Fenrir\'s photo';



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
