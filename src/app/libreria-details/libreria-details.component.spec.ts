import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaDetailsComponent } from './libreria-details.component';

describe('LibreriaDetailsComponent', () => {
  let component: LibreriaDetailsComponent;
  let fixture: ComponentFixture<LibreriaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibreriaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibreriaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
