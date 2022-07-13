import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivArrayComponent } from './reactiv-array.component';

describe('ReactivArrayComponent', () => {
  let component: ReactivArrayComponent;
  let fixture: ComponentFixture<ReactivArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
