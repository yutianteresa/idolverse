import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetalleMerchComponent } from './producto-detalle-merch.component';

describe('ProductoDetalleMerchComponent', () => {
  let component: ProductoDetalleMerchComponent;
  let fixture: ComponentFixture<ProductoDetalleMerchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoDetalleMerchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoDetalleMerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
