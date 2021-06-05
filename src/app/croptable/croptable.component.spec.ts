import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroptableComponent } from './croptable.component';

describe('CroptableComponent', () => {
  let component: CroptableComponent;
  let fixture: ComponentFixture<CroptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
