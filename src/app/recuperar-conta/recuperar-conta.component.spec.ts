import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContaComponent } from './recuperar-conta.component';

describe('RecuperarContaComponent', () => {
  let component: RecuperarContaComponent;
  let fixture: ComponentFixture<RecuperarContaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarContaComponent]
    });
    fixture = TestBed.createComponent(RecuperarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
