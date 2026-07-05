import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRoot } from './add-root';

describe('AddRoot', () => {
  let component: AddRoot;
  let fixture: ComponentFixture<AddRoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRoot],
    }).compileComponents();

    fixture = TestBed.createComponent(AddRoot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
