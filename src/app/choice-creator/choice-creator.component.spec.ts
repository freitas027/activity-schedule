import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceCreatorComponent } from './choice-creator.component';

describe('ChoiceCreatorComponent', () => {
  let component: ChoiceCreatorComponent;
  let fixture: ComponentFixture<ChoiceCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoiceCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoiceCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
