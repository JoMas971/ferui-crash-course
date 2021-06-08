import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridWidgetComponent } from './datagrid-widget.component';

describe('DatagridWidgetComponent', () => {
  let component: DatagridWidgetComponent;
  let fixture: ComponentFixture<DatagridWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatagridWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
