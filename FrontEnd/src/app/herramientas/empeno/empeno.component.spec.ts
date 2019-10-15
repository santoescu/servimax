import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpenoComponent } from './empeno.component';

describe('EmpenoComponent', () => {
  let component: EmpenoComponent;
  let fixture: ComponentFixture<EmpenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
