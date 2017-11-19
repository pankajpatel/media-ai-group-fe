import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonughtCardComponent } from './donught-card.component';

describe('DonughtCardComponent', () => {
  let component: DonughtCardComponent;
  let fixture: ComponentFixture<DonughtCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonughtCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonughtCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
