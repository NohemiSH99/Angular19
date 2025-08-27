import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarGenericComponent } from './toolbar-generic.component';

describe('ToolbarGenericComponent', () => {
  let component: ToolbarGenericComponent;
  let fixture: ComponentFixture<ToolbarGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarGenericComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
