import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicaucaComponent } from './unicauca.component';

describe('UnicaucaComponent', () => {
  let component: UnicaucaComponent;
  let fixture: ComponentFixture<UnicaucaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnicaucaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnicaucaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
