import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginasecundariaComponent } from './paginasecundaria.component';

describe('PaginasecundariaComponent', () => {
  let component: PaginasecundariaComponent;
  let fixture: ComponentFixture<PaginasecundariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginasecundariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginasecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
