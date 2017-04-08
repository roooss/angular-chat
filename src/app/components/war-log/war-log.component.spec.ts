import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarLogComponent } from './war-log.component';

describe('WarLogComponent', () => {
  let component: WarLogComponent;
  let fixture: ComponentFixture<WarLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
