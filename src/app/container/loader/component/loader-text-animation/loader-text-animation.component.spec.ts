import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderAextAnimationComponent } from './loader-text-animation.component';

describe('LoaderComponent', () => {
  let component: LoaderAextAnimationComponent;
  let fixture: ComponentFixture<LoaderAextAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderAextAnimationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderAextAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
