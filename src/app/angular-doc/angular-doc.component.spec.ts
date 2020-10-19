import { TestBed } from '@angular/core/testing';
import { AngularDocComponent } from './angular-doc.component';

describe('AngularDocComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AngularDocComponent
      ],
    }).compileComponents();
  });

  it('should create the angularDoc', () => {
    const fixture = TestBed.createComponent(AngularDocComponent);
    const angularDoc = fixture.componentInstance;
    expect(angularDoc).toBeTruthy();
  });
});
