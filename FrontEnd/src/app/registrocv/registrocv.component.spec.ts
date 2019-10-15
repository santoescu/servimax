import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocvComponent } from './registrocv.component';

describe('RegistrocvComponent', () => {
  let component: RegistrocvComponent;
  let fixture: ComponentFixture<RegistrocvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrocvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrocvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
