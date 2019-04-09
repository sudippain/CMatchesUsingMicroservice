import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMatchesComponent } from './calendar-matches.component';

describe('CalendarMatchesComponent', () => {
  let component: CalendarMatchesComponent;
  let fixture: ComponentFixture<CalendarMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
