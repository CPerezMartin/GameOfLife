import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GolComponent } from './gol.component';

describe('GolComponent', () => {
  let component: GolComponent;
  let fixture: ComponentFixture<GolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ GolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create GoLComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should renderGrid to be called at start', () => {
    spyOn(component, 'renderGrid').and.callThrough();
    expect(component.rows.length).toBeGreaterThan(0);
    fixture.whenRenderingDone()
    .then( () => {
      expect(component.renderGrid).toHaveBeenCalledTimes(1);
      expect(component.renderGrid).toHaveBeenCalledWith(component.rowMax, component.colMax);
    });
  });
});
