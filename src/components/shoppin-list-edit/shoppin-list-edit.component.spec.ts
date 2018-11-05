import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinListEditComponent } from './shoppin-list-edit.component';

describe('ShoppinListEditComponent', () => {
  let component: ShoppinListEditComponent;
  let fixture: ComponentFixture<ShoppinListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppinListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
