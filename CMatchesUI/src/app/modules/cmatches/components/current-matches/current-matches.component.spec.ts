import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMatchesComponent } from './current-matches.component';

describe('CurrentMatchesComponent', () => {
  let component: CurrentMatchesComponent;
  let fixture: ComponentFixture<CurrentMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
