import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardsGenericComponent } from './list-cards-generic.component';

describe('ListCardsGenericComponent', () => {
  let component: ListCardsGenericComponent;
  let fixture: ComponentFixture<ListCardsGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCardsGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardsGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
