import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibleLoaderComponent } from './visible-loader.component';

describe('VisibleLoaderComponent', () => {
  let component: VisibleLoaderComponent;
  let fixture: ComponentFixture<VisibleLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisibleLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibleLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
