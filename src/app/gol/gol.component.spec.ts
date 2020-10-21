import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
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

  it('should createGrid to generate correct number of cells', () => {
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

  it('should random cells generate proper active cells', () => {
    const MOCK_TIMES = 2;
    let control = 0;
    spyOn(component, 'randomCells').and.callThrough();
    component.randomCells(MOCK_TIMES);
    component.rows.forEach(row => {
      row.cols.forEach( col => {
        if (col.active === true) {
          control++;
        }
      });
    });
    expect(control).toEqual(MOCK_TIMES);
  });

  it('should stopGame call clearInterval', () => {
    spyOn(component, 'stopGame').and.callThrough();
    component.stopGame();
    expect((component.timer)).toBeFalsy();
  });

  it('should playGame set interval', () => {
    spyOn(component, 'playGame').and.callThrough();
    component.playGame();
    expect((component.timer)).toBeTruthy();
  });

  it('should checkNeighbours count 3 neighbours', () => {
    component.renderGrid(3, 3);
    component.rows[0].cols.forEach(col => {
      col.active = true;
    });
    spyOn(component, 'checkNeighbours').and.callThrough();
    const CONTROL = component.checkNeighbours(1, 1);
    expect(CONTROL).toEqual(3);
  });

  it('should checkNeighbours count 0 neighbours', () => {
    component.renderGrid(3, 3);
    component.rows[0].cols.forEach(col => {
      col.active = true;
    });
    spyOn(component, 'checkNeighbours').and.callThrough();
    const CONTROL = component.checkNeighbours(2, 2);
    expect(CONTROL).toEqual(0);
  });

  it('should clearGame reset data', () => {
    component.renderGrid(3, 3);
    component.generation = 5;
    let CONTROL = 0;
    component.rows.forEach(row => {
      row.cols.forEach(col => {
        col.active = true;
      });
    });
    spyOn(component, 'stopGame');
    component.clearGame();
    component.rows.forEach(row => {
      row.cols.forEach(col => {
        if (col.active) {
          CONTROL++;
        }
      });
    });
    expect(component.stopGame).toHaveBeenCalled();
    expect(component.generation).toEqual(0);
    expect(CONTROL).toEqual(0);
  });
});
