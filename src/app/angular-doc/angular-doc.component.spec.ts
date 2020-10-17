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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AngularDocComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'GameOfLife'`, () => {
  //   const fixture = TestBed.createComponent(AngularDocComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('GameOfLife');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AngularDocComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('GameOfLife app is running!');
  });
});
