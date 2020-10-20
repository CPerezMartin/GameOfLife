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
    fixture.whenRenderingDone()
    .then( () => {
      expect(component.renderGrid).toHaveBeenCalledWith(component.rowMax, component.colMax);
      expect(component.rows.length).toEqual(component.rowMax);
      expect(component.rows[0].col.length).toEqual(component.colMax);
    });
  });

  fit('should createGrid to generate correct number of cells', () => {
    const cols = 5;
    const rows = 5;
    spyOn(component, 'createGrid').and.callThrough();
    component.createGrid(rows, cols);
    fixture.detectChanges();
    fixture.whenRenderingDone()
    .then( () => {
      expect(component.createGrid).toHaveBeenCalledWith(rows, cols);
      expect(component.rows.length).toEqual(rows);
      expect(component.rows[0].col.length).toEqual(cols);
    });
  });
});
