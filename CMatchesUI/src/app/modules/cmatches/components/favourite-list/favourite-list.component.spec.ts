import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteListComponent } from './favourite-list.component';

describe('FavouriteListComponent', () => {
  let component: FavouriteListComponent;
  let fixture: ComponentFixture<FavouriteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
