import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetalleIDleComponent } from './producto-detalle-i-dle.component';

describe('ProductoDetalleIDleComponent', () => {
  let component: ProductoDetalleIDleComponent;
  let fixture: ComponentFixture<ProductoDetalleIDleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoDetalleIDleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoDetalleIDleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
