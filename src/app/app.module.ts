import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoaderTextAnimationComponent } from './container/loader/component/loader-text-animation/loader-text-animation.component';
import { VisibleLoaderComponent } from './container/loader/visible-loader.component';
// tslint:disable-next-line:max-line-length
import { LoaderBackgroundAnimationComponent } from './container/loader/component/loader-background-animation/loader-background-animation.component';
import { ImageCarousselComponent } from './container/image-caroussel/image-caroussel.component';
import { CarouselItemDirective } from './container/image-caroussel/directives/carousel-item.directive';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoaderTextAnimationComponent,
    VisibleLoaderComponent,
    LoaderBackgroundAnimationComponent,
    ImageCarousselComponent,
    CarouselItemDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
