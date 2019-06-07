import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostPage } from './list-post.page';

describe('ListPostPage', () => {
  let component: ListPostPage;
  let fixture: ComponentFixture<ListPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
