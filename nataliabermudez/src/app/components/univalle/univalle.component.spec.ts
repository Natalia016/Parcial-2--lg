import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivalleComponent } from './univalle.component';

describe('UnivalleComponent', () => {
  let component: UnivalleComponent;
  let fixture: ComponentFixture<UnivalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnivalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
