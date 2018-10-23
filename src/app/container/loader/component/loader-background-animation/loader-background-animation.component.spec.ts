import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderBackgroundAnimationComponent } from './loader-background-animation.component';

describe('LoaderBackgroundAnimationComponent', () => {
  let component: LoaderBackgroundAnimationComponent;
  let fixture: ComponentFixture<LoaderBackgroundAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderBackgroundAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderBackgroundAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
