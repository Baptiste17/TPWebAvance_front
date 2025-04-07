import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnduleurComponent } from './onduleur.component';

describe('OnduleurComponent', () => {
  let component: OnduleurComponent;
  let fixture: ComponentFixture<OnduleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnduleurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnduleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
