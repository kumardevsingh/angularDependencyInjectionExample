import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLevelDependencyComponent } from './first-level-dependency.component';

describe('FirstLevelDependencyComponent', () => {
  let component: FirstLevelDependencyComponent;
  let fixture: ComponentFixture<FirstLevelDependencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLevelDependencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLevelDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
