import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRegisterComponent } from './SellerRegister.component';

describe('RegisterComponent', () => {
  let component: SellerRegisterComponent;
  let fixture: ComponentFixture<SellerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
