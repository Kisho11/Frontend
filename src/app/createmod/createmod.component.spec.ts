import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemodComponent } from './createmod.component';

describe('CreatemodComponent', () => {
  let component: CreatemodComponent;
  let fixture: ComponentFixture<CreatemodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
