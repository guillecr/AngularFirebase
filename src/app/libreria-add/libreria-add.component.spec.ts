import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaAddComponent } from './libreria-add.component';

describe('LibreriaAddComponent', () => {
  let component: LibreriaAddComponent;
  let fixture: ComponentFixture<LibreriaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibreriaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibreriaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
