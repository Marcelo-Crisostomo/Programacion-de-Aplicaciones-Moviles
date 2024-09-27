import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoEncontradoPage } from './no-encontrado.page';

describe('NoEncontradoPage', () => {
  let component: NoEncontradoPage;
  let fixture: ComponentFixture<NoEncontradoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEncontradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
