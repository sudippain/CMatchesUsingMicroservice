import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastMatchesComponent } from './past-matches.component';

describe('PastMatchesComponent', () => {
  let component: PastMatchesComponent;
  let fixture: ComponentFixture<PastMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
