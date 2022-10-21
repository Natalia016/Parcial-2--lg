import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FupComponent } from './fup.component';

describe('FupComponent', () => {
  let component: FupComponent;
  let fixture: ComponentFixture<FupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
