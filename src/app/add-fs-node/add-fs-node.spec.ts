import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFsNode } from './add-fs-node';

describe('AddFsNode', () => {
  let component: AddFsNode;
  let fixture: ComponentFixture<AddFsNode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFsNode],
    }).compileComponents();

    fixture = TestBed.createComponent(AddFsNode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
