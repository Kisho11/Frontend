import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostharvestComponent } from './postharvest.component';

describe('PostharvestComponent', () => {
  let component: PostharvestComponent;
  let fixture: ComponentFixture<PostharvestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostharvestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostharvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
