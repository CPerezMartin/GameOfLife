import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gol',
  templateUrl: './gol.component.html',
  styleUrls: ['./gol.component.scss']
})
export class GolComponent implements OnInit {

  rowMax = 25;
  colMax = 50;
  rows = [];
  generation = 0;
  timer;

  constructor() { }

  ngOnInit(): void {
    this.rows = this.createGrid(this.rowMax, this.colMax);
  }

  createGrid = (rows: number, cols: number) => {
    const output = [];
    for (let i = 0; i < rows; i++){
      const col = [];
      for ( let j = 0; j < cols; j++){
        const cell = {
          active: false,
          neighbours: 0
        };
        col.push(cell);
      }
      output.push({cols: col});
    }
    return output;
  }

  checkNeighbours = (row: number, col: number) => {
    let count = 0;
    for (let i = row - 1; i < row + 2; i++){
      for (let j = col - 1; j < col + 2; j++){
        if ((i !== row || j !== col) && (this.rows[i]) && (this.rows[i].cols[j])){
          if (this.rows[i].cols[j].active) {
            count++;
          }
      }
    }
  }
    return count;
  }

  switchStatus = (i: number, j: number) => {
  this.rows[i].cols[j].active = !this.rows[i].cols[j].active;
  }


  stopGame = () => {
    clearInterval(this.timer);
  }

  clearGame = () => {
    this.stopGame();
    this.generation = 0;
    this.rows.forEach(row => {
      row.cols.forEach(col => {
        col.active = false;
      });
    });
  }

  playGame = () => {
    // this.timer = setInterval(() => {
      this.generation++;
      this.rows.forEach((row, rowIndex) => {
        const i = rowIndex;
        row.cols.forEach((col, colIndex) => {
          const j = colIndex;
          col.neighbours = this.checkNeighbours(i, j);
          // console.log('CONSOLE:: GolComponent -> //this.timer -> col.neighbours', col)
          switch (col.neighbours) {
            case  3:
              col.active = true;
              break;
            case 2:
              break;
            default:
              col.active = false;
          }
        });
      });
    // }, 100);
  }
}
