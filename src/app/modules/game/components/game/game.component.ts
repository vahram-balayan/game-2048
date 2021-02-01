import { Component, HostListener, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { GameService } from '../../services/game.service';

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
    ArrowRight: 'right',
    ArrowLeft: 'left',
    ArrowUp: 'up',
    ArrowDown: 'down',
  }


  constructor(public gameService: GameService) { }

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
      this.gameService[this.keyEventCodeMap[event.code]]();
    }
  }

}
