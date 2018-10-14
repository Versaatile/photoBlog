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
        transformOrigin: 'bo left',
        color: 'white',
      })),

      state('closed', style({
        opacity: 1,
        transform: 'rotate(19deg)',
        transformOrigin: 'bottom right',
        color: 'black'
      })),

      transition('closed => open', [
        animate('0.5s ease-in')
      ]),

      transition('open => closed', [
        animate('0.5s ease-in')
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
  public triggerLine = false;
  public triggerBackline = false;
  public triggerLineBack = false;
  public displayfirstLine = true;


  constructor() { }

  ngOnInit() {
    if (this.triggerText === false) {
      setTimeout(() => this.triggerText = true);
    }
  }

  public textAnimationDone(event) {
    if (event.fromState === 'closed') {
      this.triggerLine = true;
    }
  }

  public lineAnimationDone(event) {
    console.log(event);
    if (event.fromState === 'closed') {
      this.displayfirstLine = !this.displayfirstLine;
      this.triggerText = !this.triggerText;
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
