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
    for (let i = row - 1; i < row + 1; i++){
      for (let j = row - 1; j < row + 1; j++){
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
  }

  playGame = () => {
    this.timer = setInterval(() => {
      this.generation++;
      this.rows.forEach(row => {
        const i = row;
        console.log('CONSOLE:: GolComponent -> runGame -> i', i);
        row.cols.forEach(col => {
          const j = col;
          // console.log('CONSOLE:: GolComponent -> runGame -> j', j)
          col.neighbours = this.checkNeighbours(i, j);
          // console.log('CONSOLE:: GolComponent -> runGame -> col', col)
        });
      });
    }, 100);
  }
}
