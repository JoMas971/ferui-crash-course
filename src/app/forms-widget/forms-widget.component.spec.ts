import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsWidgetComponent } from './forms-widget.component';

describe('FormsWidgetComponent', () => {
  let component: FormsWidgetComponent;
  let fixture: ComponentFixture<FormsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
