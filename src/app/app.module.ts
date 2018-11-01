import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoaderTextAnimationComponent } from './container/loader/component/loader-text-animation/loader-text-animation.component';
import { VisibleLoaderComponent } from './container/loader/visible-loader.component';
// tslint:disable-next-line:max-line-length
import { LoaderBackgroundAnimationComponent } from './container/loader/component/loader-background-animation/loader-background-animation.component';
import { ImageCarousselComponent } from './container/image-caroussel/image-caroussel.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoaderTextAnimationComponent,
    VisibleLoaderComponent,
    LoaderBackgroundAnimationComponent,
    ImageCarousselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
