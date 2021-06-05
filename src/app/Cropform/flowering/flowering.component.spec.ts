import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloweringComponent } from './flowering.component';

describe('FloweringComponent', () => {
  let component: FloweringComponent;
  let fixture: ComponentFixture<FloweringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloweringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloweringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
