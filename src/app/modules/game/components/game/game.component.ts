import { Component, HostListener, OnInit } from '@angular/core';
import { Item } from '../../models/item';

const colorMap: {[k: number]: string} = {
  2: '#a6c1ed',
  4: '#97b2de',
  8: '#7d99c7',
  16: '#637fad',
  32: '#5989d9',
  64: '#3f6bb5',
  128: '#a772cc',
  256: '#7f4ba3',
  512: '#6d3296',
  1024: '#6fd1a7',
  2048: '#0aad68',
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  keyEventCodeMap: {[type: string]: string} = {
    ArrowRight: 'ArrowRight',
    ArrowLeft: 'ArrowLeft',
    ArrowUp: 'ArrowUp',
    ArrowDown: 'ArrowDown',
  }

  items: Item[] = [
    {
      value: 2,
      row: 1,
      col: 1,
    },
    {
      value: 4,
      row: 1,
      col: 2,
    },
    {
      value: 8,
      row: 1,
      col: 3,
    },
    {
      value: 16,
      row: 1,
      col: 4,
    },
    {
      value: 32,
      row: 2,
      col: 1,
    },
    {
      value: 64,
      row: 2,
      col: 2,
    },
    {
      value: 128,
      row: 2,
      col: 3,
    },
    {
      value: 256,
      row: 2,
      col: 4,
    },
    {
      value: 512,
      row: 3,
      col: 1,
    },
    {
      value: 1024,
      row: 3,
      col: 2,
    },
    {
      value: 2048,
      row: 3,
      col: 3,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getStyles(item: Item): {[p: string]: string} {
    const top = (item.row * 110 - 100) + 'px';
    const left = (item.col * 110 - 100) + 'px';

    return {
      top,
      left,
      'background-color': colorMap[item.value] || "#f2e30c",
      }
  }

  @HostListener('window:keyup', ['$event'])

  onKeyup(event: KeyboardEvent){

    if(this.keyEventCodeMap[event.code]) {
      console.log(this.keyEventCodeMap[event.code])
    }


  }

}
