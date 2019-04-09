import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmatchesContainerComponent } from './cmatches-container.component';

describe('CmatchesContainerComponent', () => {
  let component: CmatchesContainerComponent;
  let fixture: ComponentFixture<CmatchesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmatchesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmatchesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
