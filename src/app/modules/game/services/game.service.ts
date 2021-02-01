import { Injectable } from '@angular/core';
import { Item } from '../models/item'

@Injectable({
  providedIn: 'root'
})


export class GameService {

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

  right() {
    this.items = []
  }

  left() {
    
  }

  up() {
    
  }

  down() {
    
  }
}
