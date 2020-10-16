import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-gol',
  templateUrl: './gol.component.html',
  styleUrls: ['./gol.component.scss']
})
export class GolComponent implements OnInit {

  rowMax = 25;
  colMax = 50;
  rows = [];


  constructor() {

  }

  ngOnInit(): void {
   this.rows = this.createGrid(this.rowMax, this.colMax);
   console.log('CONSOLE:: GolComponent -> ngOnInit -> this.rows', this.rows);
   console.log('CONSOLE:: GolComponent -> ngOnInit -> this.rows.cols', this.rows[5].cols);
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

}
