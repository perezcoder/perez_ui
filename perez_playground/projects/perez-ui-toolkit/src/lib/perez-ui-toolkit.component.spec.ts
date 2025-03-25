import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerezUiToolkitComponent } from './perez-ui-toolkit.component';

describe('PerezUiToolkitComponent', () => {
  let component: PerezUiToolkitComponent;
  let fixture: ComponentFixture<PerezUiToolkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerezUiToolkitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerezUiToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
